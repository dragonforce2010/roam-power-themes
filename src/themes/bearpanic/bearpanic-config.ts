import { ChangeEvent } from 'react';
import { findStyleRuleWithCallBack, genColorSetting, genFontFamilySetting, genFontSizeSetting } from '../../utils/configUtil';

const themeName = '.bear-panic'
const fontSetting = genFontSizeSetting('Theme Font Size', 'Select the font size of your theme', themeName, '--font-size')
const primaryColorSetting = genColorSetting('Theme Primary Color', 'Select the primary color of your theme', themeName, '--primary-color', '#6f4ebb')
const fontFamilySetting = genFontFamilySetting('Theme Font Family', 'Select the font family of your theme', themeName, '--font-family')
const backgroundColorSetting = genColorSetting('Theme Background Color', 'Select the background color of your theme', themeName, '--background-color', '#111c2a');
const borderColorSetting = genColorSetting('Theme Border Color', 'Select the border color of your theme', themeName, '--border-color', '#090b10');
const textColorSetting = genColorSetting('Theme Text Color', 'Select the text color of your theme', themeName, '--text-color', '#f6f7ed');
const sidebarColorSetting = genColorSetting('Theme Sidebar Color', 'Select the sidebar color of your theme', themeName, '--sidebar-color', '#090b10');
const highlightColorSetting = genColorSetting('Theme Highlight Color', 'Select the highlight color of your theme', themeName, '--highlight-color', '#6f4ebb');
const bracketsColorSetting = genColorSetting('Theme Brackets Color', 'Select the color of brackets in your theme', themeName, '--brackets-color', '#8e743d');
const highlightBlueSetting = genColorSetting('Theme Highlight Blue', 'Select the bright blue highlight color of your theme', themeName, '--highlight-blue', '#1c2e3e');
const referenceBgSetting = genColorSetting('Theme Reference Background', 'Select the background color of reference boxes in your theme', themeName, '--reference-bg', '#172133');
const referenceBorderSetting = genColorSetting('Theme Reference Border', 'Select the border color of reference boxes in your theme', themeName, '--reference-border', '#1e3745');
const linkColorSetting = genColorSetting('Theme Link Color', 'Select the color of links in your theme', themeName, '--link-color', '#53c1dc');
const codeColorSetting = genColorSetting('Theme Code Color', 'Select the color of code in your theme', themeName, '--code-color', '#f6f7ee');
const gutterBgSetting = genColorSetting('Theme Gutter Background', 'Select the background color of the code editor gutter', themeName, '--gutter-bg', '#091722');
const lineColorSetting = genColorSetting('Theme Line Color', 'Select the color of code editor lines', themeName, '--line-color', '#a0a2b6');
const activeLineBgSetting = genColorSetting('Theme Active Line Background', 'Select the background color of the active line in code editor', themeName, '--active-line-bg', '#0d2030');
const keywordColorSetting = genColorSetting('Theme Keyword Color', 'Select the color of keywords in code editor', themeName, '--keyword-color', '#5393a2');

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

const loadBearpanicThemeSettings = () => {
  bearpanicThemeSettings.forEach(setting => {
    findStyleRuleWithCallBack(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  bearpanicThemeSettings,
  loadBearpanicThemeSettings
}