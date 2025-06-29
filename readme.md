# TLUoC Eslint Config &middot;

## Translate
- 🇺🇸 [**English**](#english--)
- 🇷🇺 [**Русский**](#русский--)

## English &middot; 🇺🇸


## Русский &middot; 🇷🇺
### 📃 Описание
Данный проект предназначен для создания красивой и читаемой конфигурации [**Eslint**](https://eslint.org/), без лишних сложностей в установке и настройке. **TLUoC** использует множество плагинов для линтинга и форматирования различных аспектов кода, от **JS/TS** до **HTML**, стараясь при этом использовать самые актуальные их версии.

## 🚀 Установка
Для установки конфигурации достаточно выполнить пару простых шагов:
1. Установите конфигурацию
```sh
npm i -D @tluoc/eslint-config
```

2. Создайте/дополните файл `eslint.config.js`
```js
import tluocConfig from '@tluoc/eslint-config';

export const default = [
  ...tluocConfig
];
```

3. ✔️ **Всё готово!**

## 🔩 Плагины
- [@cspell/eslint-plugin](https://www.npmjs.com/package/@cspell/eslint-plugin)
- [@cspell/dict-ru_ru](https://www.npmjs.com/package/@cspell/dict-ru_ru)
- [@eslint/js](https://www.npmjs.com/package/@eslint/js)
- [@eslint/json](https://www.npmjs.com/package/@eslint/json)
- [@html-eslint/eslint-plugin](https://www.npmjs.com/package/@html-eslint/eslint-plugin)
- [@html-eslint/parser](https://www.npmjs.com/package/@html-eslint/parser)
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [eslint-plugin-import-x](https://www.npmjs.com/package/eslint-plugin-import-x)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- [eslint-plugin-spellcheck](https://www.npmjs.com/package/eslint-plugin-spellcheck)