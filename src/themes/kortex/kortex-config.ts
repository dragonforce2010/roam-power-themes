import { ChangeEvent } from 'react';
import { findStyleRule, genColorSetting, genFontFamilySetting, genFontSizeSetting } from '../../utils/configUtil';

const themeName = '.kortex'
const fontSetting = genFontSizeSetting('Theme Font Size', 'Select the font size of your theme', themeName, '--font-size')
const primaryColorSetting = genColorSetting('Theme Primary Color', 'Select the primary color of your theme', themeName, '--primary-color', '#ff8c00')
const fontFamilySetting = genFontFamilySetting('Theme Font Family', 'Select the font family of your theme', themeName, '--font-family')
const backgroundColorSetting = genColorSetting('Theme Background Color', 'Select the background color of your theme', themeName, '--background-color', '#1a1a1a');
const borderColorSetting = genColorSetting('Theme Border Color', 'Select the border color of your theme', themeName, '--border-color', '#333333');
const textColorSetting = genColorSetting('Theme Text Color', 'Select the text color of your theme', themeName, '--text-color', '#f0f0f0');
const sidebarColorSetting = genColorSetting('Theme Sidebar Color', 'Select the sidebar color of your theme', themeName, '--sidebar-color', '#2a2a2a');
const highlightColorSetting = genColorSetting('Theme Highlight Color', 'Select the highlight color of your theme', themeName, '--highlight-color', '#ff8c00');
const bracketsColorSetting = genColorSetting('Theme Brackets Color', 'Select the color of brackets in your theme', themeName, '--brackets-color', '#ffb347');
const highlightBlueSetting = genColorSetting('Theme Highlight Blue', 'Select the bright blue highlight color of your theme', themeName, '--highlight-blue', '#4a9eff');
const referenceBgSetting = genColorSetting('Theme Reference Background', 'Select the background color of reference boxes in your theme', themeName, '--reference-bg', '#2d2d2d');
const referenceBorderSetting = genColorSetting('Theme Reference Border', 'Select the border color of reference boxes in your theme', themeName, '--reference-border', '#404040');
const linkColorSetting = genColorSetting('Theme Link Color', 'Select the color of links in your theme', themeName, '--link-color', '#4a9eff');
const codeColorSetting = genColorSetting('Theme Code Color', 'Select the color of code in your theme', themeName, '--code-color', '#e0e0e0');
const gutterBgSetting = genColorSetting('Theme Gutter Background', 'Select the background color of the code editor gutter', themeName, '--gutter-bg', '#252525');
const lineColorSetting = genColorSetting('Theme Line Color', 'Select the color of code editor lines', themeName, '--line-color', '#666666');
const activeLineBgSetting = genColorSetting('Theme Active Line Background', 'Select the background color of the active line in code editor', themeName, '--active-line-bg', '#333333');
const keywordColorSetting = genColorSetting('Theme Keyword Color', 'Select the color of keywords in code editor', themeName, '--keyword-color', '#ff8c00');

const kortexThemeSettings = [
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

const loadKortexThemeSettings = () => {
  kortexThemeSettings.forEach(setting => {
    findStyleRule(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  kortexThemeSettings,
  loadKortexThemeSettings
}
