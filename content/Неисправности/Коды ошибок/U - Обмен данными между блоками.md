---
title: U - Обмен данными между блоками
aliases: [U-коды, U-код, коды U, ошибки связи, ошибки обмена данными, коды обмена данными]
tags: [коды-ошибок]
---

Коды группы U (Network — сеть) означают нарушение обмена данными между электронными блоками по [[Controller Area Network (CAN)|шине CAN]] или [[Local Interconnect Network (LIN)|шине LIN]]: блок перестал отвечать («потеряна связь») или прислал данные, которым нельзя доверять («недостоверные данные»). Причиной чаще бывает не сам блок, а питание и соединения: разряженный [[Absorbed Glass Mat (AGM)|аккумулятор]], окисленный разъём, перетёртый провод. U-код нередко появляется вместе с более конкретным кодом другой группы, который и указывает на источник проблемы.

В таблице — все коды группы U для Sportster S, Nightster и Pan America. Код записан полностью, семью символами: последние два символа уточняют тип неисправности. Как устроен код, как его прочитать и что с ним делать — на странице [[Неисправности/Коды ошибок/index|Коды ошибок]]. Другие группы: [[P - Двигатель и трансмиссия|P-коды]], [[B - Кузовная электроника|B-коды]], [[C - Шасси и тормоза|C-коды]]. Исходный список кодов производителя в PDF — [[Список кодов ошибок]]; если код неизвестен, а мотоцикл ведёт себя странно, поможет [[Диагностика по симптомам]].

> [!tip] Поиск по коду
> Нажмите Ctrl+F (на телефоне — «Найти на странице») и введите код без пробелов и дефисов, например U000100. Буква статуса в конце кода (C, P или H) в таблице не указывается — её нужно отбросить.

## Коды группы U на страницах неисправностей

Страницы, где коды этой группы разобраны вместе с причинами и порядком ремонта:

- [[Аккумулятор - разряд и выбор]] — U228700.
- [[Блоки кнопок на руле]] — U014100, U014200, U043100, U04318F, U04438F.
- [[Мотоцикл не заводится или глохнет]] — U010000.

## Коды

| Код | Расшифровка | Оригинал |
|---|---|---|
| U000100 | Шина [[Controller Area Network (CAN)\|CAN]] — ошибка | [[Controller Area Network (CAN)\|CAN]] bus error |
| U000188 | Шина [[Controller Area Network (CAN)\|CAN]] — ошибка | [[Controller Area Network (CAN)\|CAN]] bus error |
| U000189 | Шина [[Controller Area Network (CAN)\|CAN]] — ошибка | [[Controller Area Network (CAN)\|CAN]] bus error |
| U000200 | Шина [[Controller Area Network (CAN)\|CAN]] — ошибка | [[Controller Area Network (CAN)\|CAN]] bus error |
| U000300 | Блок [[Anti-lock Braking System (ABS)\|ABS/EHCU]] — внутренняя неисправность | [[Anti-lock Braking System (ABS)\|ABS/EHCU]] internal fault |
| U002888 | Шина [[Controller Area Network (CAN)\|CAN]], основной канал — ошибка | [[Controller Area Network (CAN)\|CAN]] bus error, primary |
| U003788 | Шина [[Controller Area Network (CAN)\|CAN]], дополнительный канал — ошибка | [[Controller Area Network (CAN)\|CAN]] bus error, secondary |
| U010000 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]]/VSC | Lost communication with [[Electronic Control Module (ECM)\|ECM]]/VSC |
| U010001 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U010002 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U010003 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U010004 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U010005 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U010081 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100F0 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100F1 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100F2 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100F3 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100F6 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100F7 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100F8 | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U0100FD | Потеряна связь с [[Electronic Control Module (ECM)\|ECM]] | Lost communication with [[Electronic Control Module (ECM)\|ECM]] |
| U012100 | Потеряна связь с [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Lost communication with [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U012500 | Потеряна связь с [[Inertial Measurement Unit (IMU)\|IMU]] | Lost communication with [[Inertial Measurement Unit (IMU)\|IMU]] |
| U012581 | Потеряна связь с [[Inertial Measurement Unit (IMU)\|IMU]] | Lost communication with [[Inertial Measurement Unit (IMU)\|IMU]] |
| U0125F0 | Потеряна связь с [[Inertial Measurement Unit (IMU)\|IMU]] | Lost communication with [[Inertial Measurement Unit (IMU)\|IMU]] |
| U0125F1 | Потеряна связь с [[Inertial Measurement Unit (IMU)\|IMU]] | Lost communication with [[Inertial Measurement Unit (IMU)\|IMU]] |
| U0125F2 | Потеряна связь с [[Inertial Measurement Unit (IMU)\|IMU]] | Lost communication with [[Inertial Measurement Unit (IMU)\|IMU]] |
| U014000 | Потеряна связь с [[Body Control Module (BCM)\|BCM]] | Lost communication with [[Body Control Module (BCM)\|BCM]] |
| U014081 | Потеряна связь с [[Body Control Module (BCM)\|BCM]] | Lost communication with [[Body Control Module (BCM)\|BCM]] |
| U014100 | Потеряна связь с [[Left Hand Control Module (LHCM)\|LHCM]] | Lost communication with [[Left Hand Control Module (LHCM)\|LHCM]] |
| U014181 | Потеряна связь с [[Left Hand Control Module (LHCM)\|LHCM]] | Lost communication with [[Left Hand Control Module (LHCM)\|LHCM]] |
| U014200 | Потеряна связь с [[Right Hand Control Module (RHCM)\|RHCM]] | Lost communication with [[Right Hand Control Module (RHCM)\|RHCM]] |
| U014262 | Потеряна связь с [[Right Hand Control Module (RHCM)\|RHCM]] | Lost communication with [[Right Hand Control Module (RHCM)\|RHCM]] |
| U014281 | Потеряна связь с [[Right Hand Control Module (RHCM)\|RHCM]] | Lost communication with [[Right Hand Control Module (RHCM)\|RHCM]] |
| U015600 | Потеряна связь с [[Instrument Module (IM)\|приборной панелью]] | Lost communication with [[Instrument Module (IM)\|inst 1]] |
| U015601 | Потеряна связь с [[Instrument Module (IM)\|приборной панелью]] | Lost communication with [[Instrument Module (IM)\|inst 1]] |
| U015602 | Потеряна связь с [[Instrument Module (IM)\|приборной панелью]] | Lost communication with [[Instrument Module (IM)\|inst 1]] |
| U015603 | Потеряна связь с [[Instrument Module (IM)\|приборной панелью]] | Lost communication with [[Instrument Module (IM)\|inst 1]] |
| U015681 | Потеряна связь с [[Instrument Module (IM)\|приборной панелью]] | Lost communication with [[Instrument Module (IM)\|inst 1]] |
| U018200 | Потеряна связь с фарами подсветки поворота | Lost communication with banking lamp |
| U030000 | Несовместимость программного обеспечения блоков | Module software incompatibility |
| U031500 | Несовместимость программного обеспечения с [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Software incompatibility with [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U040000 | Получены недостоверные данные | Invalid data received |
| U040100 | Недостоверные данные от [[Electronic Control Module (ECM)\|ECM]]/VSC | Invalid data from [[Electronic Control Module (ECM)\|ECM]]/VSC |
| U040164 | Недостоверные данные от [[Electronic Control Module (ECM)\|ECM]] | Invalid data from [[Electronic Control Module (ECM)\|ECM]] |
| U040167 | Недостоверные данные от [[Electronic Control Module (ECM)\|ECM]] | Invalid data from [[Electronic Control Module (ECM)\|ECM]] |
| U040181 | Недостоверные данные от [[Electronic Control Module (ECM)\|ECM]] | Invalid data from [[Electronic Control Module (ECM)\|ECM]] |
| U040182 | Недостоверные данные от [[Electronic Control Module (ECM)\|ECM]] | Invalid data from [[Electronic Control Module (ECM)\|ECM]] |
| U040183 | Недостоверные данные от [[Electronic Control Module (ECM)\|ECM]] | Invalid data from [[Electronic Control Module (ECM)\|ECM]] |
| U04018F | Недостоверные данные от [[Electronic Control Module (ECM)\|ECM]] | Invalid data from [[Electronic Control Module (ECM)\|ECM]] |
| U041564 | Недостоверные данные от [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Invalid data from [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U041567 | Недостоверные данные от [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Invalid data from [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U041581 | Недостоверные данные от [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Invalid data from [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U041582 | Недостоверные данные от [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Invalid data from [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U041583 | Недостоверные данные от [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Invalid data from [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U04158F | Недостоверные данные от [[Anti-lock Braking System (ABS)\|ABS/EHCU]] | Invalid data from [[Anti-lock Braking System (ABS)\|ABS/EHCU]] |
| U042200 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U042264 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U042267 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U042281 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U042282 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U042283 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U04228F | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U043100 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U043164 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U043167 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U043181 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U043182 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U043183 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U043187 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U04318F | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U043200 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U043264 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U043267 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U043282 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U043283 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U04328F | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U0432F0 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U0432F1 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U0432F2 | Недостоверные данные от [[Inertial Measurement Unit (IMU)\|IMU]] | Invalid data from [[Inertial Measurement Unit (IMU)\|IMU]] |
| U044300 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U044367 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U044381 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U044382 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U044383 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U044387 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U04438F | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U045767 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U045781 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U045782 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U045783 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U04578F | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U048303 | Фары подсветки поворота, шина [[Local Interconnect Network (LIN)\|LIN]]: получены недостоверные данные | Banking lamp [[Local Interconnect Network (LIN)\|LIN]] bus invalid data received |
| U048356 | Фары подсветки поворота, шина [[Local Interconnect Network (LIN)\|LIN]]: получены недостоверные данные | Banking lamp [[Local Interconnect Network (LIN)\|LIN]] bus invalid data received |
| U048381 | Фары подсветки поворота, шина [[Local Interconnect Network (LIN)\|LIN]]: получены недостоверные данные | Banking lamp [[Local Interconnect Network (LIN)\|LIN]] bus invalid data received |
| U100000 | Не выполнено обучение [[Inertial Measurement Unit (IMU)\|IMU]] положению на мотоцикле | [[Inertial Measurement Unit (IMU)\|IMU]] Vehicle learn failure |
| U100188 | Шина [[Local Interconnect Network (LIN)\|LIN]] — ошибка | [[Local Interconnect Network (LIN)\|LIN]] bus error |
| U142100 | Недостоверный сигнал об опрокидывании мотоцикла (TIP) | Invalid TIP signal |
| U143181 | Недостоверные данные от переключателя света | Invalid data from lighting switch |
| U206400 | Блок [[Anti-lock Braking System (ABS)\|ABS/EHCU]] — внутренняя неисправность | [[Anti-lock Braking System (ABS)\|ABS/EHCU]] internal fault |
| U206700 | Блок [[Anti-lock Braking System (ABS)\|ABS/EHCU]] — внутренняя неисправность | [[Anti-lock Braking System (ABS)\|ABS/EHCU]] internal fault |
| U208200 | Блок [[Anti-lock Braking System (ABS)\|ABS/EHCU]] — внутренняя неисправность | [[Anti-lock Braking System (ABS)\|ABS/EHCU]] internal fault |
| U208300 | Блок [[Anti-lock Braking System (ABS)\|ABS/EHCU]] — внутренняя неисправность | [[Anti-lock Braking System (ABS)\|ABS/EHCU]] internal fault |
| U208700 | Блок [[Anti-lock Braking System (ABS)\|ABS/EHCU]] — внутренняя неисправность | [[Anti-lock Braking System (ABS)\|ABS/EHCU]] internal fault |
| U208F00 | Блок [[Anti-lock Braking System (ABS)\|ABS/EHCU]] — внутренняя неисправность | [[Anti-lock Braking System (ABS)\|ABS/EHCU]] internal fault |
| U216400 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U216700 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U218100 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U218200 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U218300 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U218700 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U218F00 | Недостоверные данные от [[Left Hand Control Module (LHCM)\|LHCM]] | Invalid data from [[Left Hand Control Module (LHCM)\|LHCM]] |
| U226400 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U226700 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U228100 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U228200 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U228300 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U228700 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U228F00 | Недостоверные данные от [[Body Control Module (BCM)\|BCM]] | Invalid data from [[Body Control Module (BCM)\|BCM]] |
| U236400 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U236700 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U238100 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U238200 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U238300 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U238700 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U238F00 | Недостоверные данные от [[Right Hand Control Module (RHCM)\|RHCM]] | Invalid data from [[Right Hand Control Module (RHCM)\|RHCM]] |
| U246400 | Недостоверные данные от [[Instrument Module (IM)\|приборной панели]] | Invalid data received from [[Instrument Module (IM)\|instrument]] |
| U246700 | Недостоверные данные от [[Instrument Module (IM)\|приборной панели]] | Invalid data received from [[Instrument Module (IM)\|instrument]] |
| U248100 | Недостоверные данные от [[Instrument Module (IM)\|приборной панели]] | Invalid data received from [[Instrument Module (IM)\|instrument]] |
| U248200 | Недостоверные данные от [[Instrument Module (IM)\|приборной панели]] | Invalid data received from [[Instrument Module (IM)\|instrument]] |
| U248300 | Недостоверные данные от [[Instrument Module (IM)\|приборной панели]] | Invalid data received from [[Instrument Module (IM)\|instrument]] |
| U248F00 | Недостоверные данные от [[Instrument Module (IM)\|приборной панели]] | Invalid data received from [[Instrument Module (IM)\|instrument]] |
| U301242 | Блок [[Inertial Measurement Unit (IMU)\|IMU]] — внутренняя неисправность | [[Inertial Measurement Unit (IMU)\|IMU]] internal fault |
| U301244 | Блок [[Inertial Measurement Unit (IMU)\|IMU]] — внутренняя неисправность | [[Inertial Measurement Unit (IMU)\|IMU]] internal fault |
| U301245 | Блок [[Inertial Measurement Unit (IMU)\|IMU]] — внутренняя неисправность | [[Inertial Measurement Unit (IMU)\|IMU]] internal fault |
| U301247 | Блок [[Inertial Measurement Unit (IMU)\|IMU]] — внутренняя неисправность | [[Inertial Measurement Unit (IMU)\|IMU]] internal fault |
| U301251 | Блок [[Inertial Measurement Unit (IMU)\|IMU]] — внутренняя неисправность | [[Inertial Measurement Unit (IMU)\|IMU]] internal fault |
| U301257 | Блок [[Inertial Measurement Unit (IMU)\|IMU]] — внутренняя неисправность | [[Inertial Measurement Unit (IMU)\|IMU]] internal fault |
| U351000 | Калибровка [[Electronic Control Module (ECM)\|ECM]] — ошибка | [[Electronic Control Module (ECM)\|ECM]] calibration error |

## Источники
- [[Список кодов ошибок]] — список кодов Revolution Max от производителя (PDF на сайте): 140 кодов группы U.
- Telegram-группа владельцев, топик «Полезные материалы» — список кодов с расшифровкой обозначений блоков.
