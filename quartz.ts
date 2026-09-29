import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

// Функции передаются в браузер строкой, поэтому внутри них нельзя ссылаться на внешние переменные.
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  mapFn: (node: any) => {
    if (node.slugSegments.length === 0 && !node.children.some((c: any) => c.slugSegment === "index")) {
      node.makeChild(["index"], { slug: "index", title: "Главная", filePath: "index.md" })
    }
  },
  sortFn: (a: any, b: any) => {
    const order = [
      "index",
      "модели",
      "покупка-мотоцикла",
      "полезная-информация",
      "обслуживание",
      "тюнинг",
      "неисправности",
      "запчасти-и-аналоги",
    ]
    const ia = order.indexOf(a.slugSegment)
    const ib = order.indexOf(b.slugSegment)
    if (ia !== -1 || ib !== -1) {
      if (ia === -1) return 1
      if (ib === -1) return -1
      return ia - ib
    }
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
  },
  order: ["filter", "map", "sort"],
})

// Картинка-превью для ссылок (Telegram, соцсети): тёмный фон, логотип, оранжевый акцент.
// Структура — в формате Satori: { type, props: { style, children } }.
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
})
componentRegistry.setOptionOverrides("@quartz-community/og-image", {
  colorScheme: "darkMode",
  defaultDescription: "Справочник по неисправностям, обслуживанию и доработкам Sportster S, Nightster и Pan America",
  imageStructure: ({ title, description, iconBase64 }: any) =>
    el("div", { display: "flex", width: "100%", height: "100%", backgroundColor: "#141414", fontFamily: "Inter" }, [
      el("div", { display: "flex", width: "16px", height: "100%", backgroundColor: "#FF6600" }),
      el(
        "div",
        { display: "flex", flexDirection: "column", flex: 1, padding: "56px 64px 48px 56px" },
        [
          el("div", { display: "flex", alignItems: "center", gap: "24px" }, [
            iconBase64
              ? { type: "img", props: { src: iconBase64, width: 104, height: 104, style: {} } }
              : el("div", { display: "flex" }),
            el("div", { display: "flex", flexDirection: "column" }, [
              el("div", { display: "flex", fontSize: 34, fontWeight: 700, color: "#FF6600" }, "База знаний Revolution Max"),
              el("div", { display: "flex", fontSize: 26, color: "#8a847e" }, "revmax.ru"),
            ]),
          ]),
          el(
            "div",
            { display: "flex", marginTop: "48px", fontSize: title.length > 40 ? 56 : 68, fontWeight: 700, color: "#F2EFEC", lineHeight: 1.15 },
            title,
          ),
          el(
            "div",
            { display: "flex", marginTop: "24px", fontSize: 30, color: "#B9B3AD", lineHeight: 1.4, maxHeight: "130px", overflow: "hidden" },
            ((d: string) => (d.length > 190 ? d.slice(0, 187) + "…" : d))(description.replace(/^Кратко\s+/, "")),
          ),
          el("div", { display: "flex", flex: 1 }),
          el(
            "div",
            { display: "flex", justifyContent: "space-between", paddingTop: "20px", borderTop: "2px solid #2e2c2a", fontSize: 24, color: "#8a847e" },
            [el("div", { display: "flex" }, "Sportster S · Nightster · Pan America"), el("div", { display: "flex", color: "#FF6600" }, "t.me/hd_sportster_s")],
          ),
        ],
      ),
    ]),
})

const config = await loadQuartzConfig()

// Текст страницы для поиска. Плагин description собирает его через hast-util-to-string,
// который склеивает соседние ячейки таблиц, пункты списков и абзацы без пробела
// («…performanceC051CF8Многоосевой…»), и поиск не находит коды ошибок, номера деталей
// и другие слова из таблиц. Этот обработчик идёт последним и пересобирает file.data.text
// с пробелом после каждого блочного элемента; экранирование и сокращение ссылок — как у description.
const blockTags = new Set([
  "p", "li", "td", "th", "tr", "thead", "tbody", "table", "ul", "ol", "dt", "dd",
  "h1", "h2", "h3", "h4", "h5", "h6", "div", "blockquote", "pre", "figcaption",
  "section", "details", "summary", "br", "hr",
])
type HastLike = { type: string; value?: string; tagName?: string; children?: HastLike[] }
const textWithGaps = (node: HastLike): string => {
  if (node.type === "text") return node.value ?? ""
  if (!node.children) return ""
  let out = ""
  for (const child of node.children) {
    out += textWithGaps(child)
    if (child.type === "element" && blockTags.has(child.tagName ?? "")) out += " "
  }
  return out
}
const escapeHTML = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;")
const urlRegex =
  /(https?:\/\/)?(?<domain>([\da-z.-]+)\.([a-z.]{2,6})(:\d+)?)(?<path>[/\w.-]*)(\?[/\w.=&;-]*)?/g
config.plugins.transformers.push({
  name: "SearchTextWithGaps",
  htmlPlugins: () => [
    () => (tree: HastLike, file: { data: Record<string, unknown> }) => {
      file.data.text = escapeHTML(textWithGaps(tree))
        .replace(urlRegex, "$<domain>$<path>")
        .replace(/[ \t]+/g, " ")
    },
  ],
})

// Поиск Pagefind вместо встроенного поиска Quartz. Индекс строит `npx pagefind` по готовому сайту
// (настройки — pagefind.yml), файлы лежат в /pagefind/. Кнопка «Поиск» в меню остаётся от плагина
// search: скрипт перехватывает нажатие на неё и Ctrl+K раньше штатного поиска и открывает окно
// <pagefind-modal>. Quartz при переходах подменяет <body>, поэтому окно создаётся заново, если его нет.
const pagefindGlue = `(() => {
  if (window.__rmPagefind) return
  window.__rmPagefind = true
  const clean = (href) => href.replace(/\\.html(?=$|[?#])/, "").replace(/\\/index(?=$|[?#])/, "/")
  const modal = () => {
    let m = document.getElementById("rm-pagefind-modal")
    if (!m) {
      m = document.createElement("pagefind-modal")
      m.id = "rm-pagefind-modal"
      document.body.appendChild(m)
    }
    return m
  }
  const open = () => {
    const dark = document.documentElement.getAttribute("saved-theme") === "dark"
    document.documentElement.setAttribute("data-pf-theme", dark ? "dark" : "light")
    const m = modal()
    customElements.whenDefined("pagefind-modal").then(() =>
      setTimeout(() => {
        // Без подрезультатов (совпадений по разделам внутри найденной заметки): в выдаче только заметки.
        const results = m.querySelector("pagefind-results")
        // Значение именно "true": при смене атрибута компонент считает пустую строку за «нет».
        if (results && results.getAttribute("hide-sub-results") !== "true") results.setAttribute("hide-sub-results", "true")
        if (m.open) m.open()
      }, 0),
    )
  }
  document.addEventListener("click", (e) => {
    const t = e.target
    if (!(t instanceof Element)) return
    if (t.closest(".search-button")) {
      e.preventDefault()
      e.stopImmediatePropagation()
      open()
      return
    }
    const a = t.closest("pagefind-modal a[href]")
    if (a) {
      a.setAttribute("href", clean(a.getAttribute("href")))
      const m = document.getElementById("rm-pagefind-modal")
      setTimeout(() => m && m.close && m.close(), 0)
    }
  }, true)
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.code === "KeyK") {
      e.preventDefault()
      e.stopImmediatePropagation()
      open()
    }
  }, true)
})()`
// Пробел между ячейками таблиц прямо в HTML: Quartz выводит <td> вплотную, и Pagefind склеивает
// соседние ячейки в выдержках («НомерДетальОригинальное название»). На вид таблиц пробел не влияет.
const spaceTableCells = (node: HastLike) => {
  if (!node.children) return
  // Пробел — последним внутри ячейки: пробелы между ячейками Quartz при выводе HTML отбрасывает.
  if (node.type === "element" && (node.tagName === "td" || node.tagName === "th")) {
    node.children.push({ type: "text", value: " " })
    return
  }
  for (const c of node.children) spaceTableCells(c)
}
config.plugins.transformers.push({
  name: "SpaceTableCells",
  htmlPlugins: () => [() => (tree: HastLike) => spaceTableCells(tree)],
})
config.plugins.transformers.push({
  name: "PagefindSearch",
  externalResources: () => ({
    css: [{ content: "/pagefind/pagefind-component-ui.css" }],
    js: [
      { src: "/pagefind/pagefind-component-ui.js", loadTime: "afterDOMReady", contentType: "external" },
      { script: pagefindGlue, loadTime: "afterDOMReady", contentType: "inline" },
    ],
  }),
})

export default config
export const layout = await loadQuartzLayout()
