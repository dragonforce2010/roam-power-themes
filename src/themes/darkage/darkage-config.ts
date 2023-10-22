import { ChangeEvent } from 'react';
import { findStyleRule } from '../../utils/configUtil';

const fontSetting = {
  id: "theme-font-size",
  name: "Theme Font Size",
  description: "Select the font size of your theme",
  action: {
    type: "select",
    items: ["extra small", "small", "medium", "large", "extra large",],
    onChange: (evt) => {
      let fontSize = '14px'
      switch (evt) {
        case 'extra small':
          fontSize = '12px'
          break
        case 'small':
          fontSize = '14px'
          break
        case 'medium':
          fontSize = '16px'
          break
        case 'large':
          fontSize = '18px'
          break
        case 'extra large':
          fontSize = '20px'
          break
        default:
          fontSize = '14px'
      }
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--font-size', fontSize))
    },
  },
};

const primaryColorSetting = {
  id: "theme-primary-color",
  name: "Theme Primary Color",
  description: "Select the primary color of your theme",
  action: {
    type: "input",
    placeholder: '#6f4ebb',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--primary-color', evt.target.value))
    },
  },
};

const fontFamilySetting = {
  id: "theme-font-family",
  name: "Theme Font Family",
  description: "Select the font family of your theme",
  action: {
    type: "select",
    items: ["Arial, sans-serif", "Georgia, serif", "Times New Roman, serif", "Verdana, sans-serif"],
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--font-family', evt));
    },
  },
};

const backgroundColorSetting = {
  id: "theme-background-color",
  name: "Theme Background Color",
  description: "Select the background color of your theme",
  action: {
    type: "input",
    placeholder: '#111c2a',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--background-color', evt.target.value));
    },
  },
};

const borderColorSetting = {
  id: "theme-border-color",
  name: "Theme Border Color",
  description: "Select the border color of your theme",
  action: {
    type: "input",
    placeholder: '#090b10',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--border-color', evt.target.value));
    },
  },
};

const textColorSetting = {
  id: "theme-text-color",
  name: "Theme Text Color",
  description: "Select the text color of your theme",
  action: {
    type: "input",
    placeholder: '#f6f7ed',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--text-color', evt.target.value));
    },
  },
};

const sidebarColorSetting = {
  id: "theme-sidebar-color",
  name: "Theme Sidebar Color",
  description: "Select the sidebar color of your theme",
  action: {
    type: "input",
    placeholder: '#090b10',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--sidebar-color', evt.target.value));
    },
  },
};

const highlightColorSetting = {
  id: "theme-highlight-color",
  name: "Theme Highlight Color",
  description: "Select the highlight color of your theme",
  action: {
    type: "input",
    placeholder: '#6f4ebb',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--highlight-color', evt.target.value));
    },
  },
};

const bracketsColorSetting = {
  id: "theme-brackets-color",
  name: "Theme Brackets Color",
  description: "Select the color of brackets in your theme",
  action: {
    type: "input",
    placeholder: '#8e743d',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--brackets-color', evt.target.value));
    },
  },
};

const highlightBlueSetting = {
  id: "theme-highlight-blue",
  name: "Theme Highlight Blue",
  description: "Select the bright blue highlight color of your theme",
  action: {
    type: "input",
    placeholder: '#1c2e3e',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--highlight-blue', evt.target.value));
    },
  },
};

const referenceBgSetting = {
  id: "theme-reference-bg",
  name: "Theme Reference Background",
  description: "Select the background color of reference boxes in your theme",
  action: {
    type: "input",
    placeholder: '#172133',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--reference-bg', evt.target.value));
    },
  },
};

const referenceBorderSetting = {
  id: "theme-reference-border",
  name: "Theme Reference Border",
  description: "Select the border color of reference boxes in your theme",
  action: {
    type: "input",
    placeholder: '#1e3745',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--reference-border', evt.target.value));
    },
  },
};

const linkColorSetting = {
  id: "theme-link-color",
  name: "Theme Link Color",
  description: "Select the color of links in your theme",
  action: {
    type: "input",
    placeholder: '#53c1dc',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--link-color', evt.target.value));
    },
  },
};

const codeColorSetting = {
  id: "theme-code-color",
  name: "Theme Code Color",
  description: "Select the color of code in your theme",
  action: {
    type: "input",
    placeholder: '#f6f7ee',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--code-color', evt.target.value));
    },
  },
};

const gutterBgSetting = {
  id: "theme-gutter-bg",
  name: "Theme Gutter Background",
  description: "Select the background color of the code editor gutter",
  action: {
    type: "input",
    placeholder: '#091722',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--gutter-bg', evt.target.value));
    },
  },
};

const lineColorSetting = {
  id: "theme-line-color",
  name: "Theme Line Color",
  description: "Select the color of code editor lines",
  action: {
    type: "input",
    placeholder: '#091722',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--line-color', evt.target.value));
    },
  },
};

const activeLineBgSetting = {
  id: "theme-active-line-bg",
  name: "Theme Active Line Background",
  description: "Select the background color of the active code editor line",
  action: {
    type: "input",
    placeholder: '#091722',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--active-line-bg', evt.target.value));
    },
  },
};

const keywordColorSetting = {
  id: "theme-keyword-color",
  name: "Theme Keyword Color",
  description: "Select the color of keywords in your theme",
  action: {
    type: "input",
    placeholder: '#f6a425',
    onChange: (evt) => {
      findStyleRule('.bear-panic', (rule: CSSStyleRule) => rule.style.setProperty('--keyword-color', evt.target.value));
    },
  },
};

const bearpanicThemeSettings = [
  fontSetting,
  primaryColorSetting,
  fontFamilySetting,
  backgroundColorSetting,
  borderColorSetting,
  textColorSetting,
  sidebarColorSetting,
  highlightColorSetting,
  bracketsColorSetting,
  highlightBlueSetting,
  referenceBgSetting,
  referenceBorderSetting,
  linkColorSetting,
  codeColorSetting,
  gutterBgSetting,
  lineColorSetting,
  activeLineBgSetting,
  keywordColorSetting,
];

export default bearpanicThemeSettings;
