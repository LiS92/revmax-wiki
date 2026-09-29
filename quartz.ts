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

export default config
export const layout = await loadQuartzLayout()
