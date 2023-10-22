import { ChangeEvent } from 'react';
import { findStyleRule, genColorSetting, genFontFamilySetting, genFontSizeSetting } from '../../utils/configUtil';

const themeName = '.leyendecker';
const headerFontSetting = genFontFamilySetting('Theme Header Font', 'Select the header font of your theme', themeName, '--header-font');
const bodyFontSetting = genFontFamilySetting('Theme Body Font', 'Select the body font of your theme', themeName, '--body-font');
const codeFontSetting = genFontFamilySetting('Theme Code Font', 'Select the code font of your theme', themeName, '--code-font');
const fontSizeSetting = genFontSizeSetting('Theme Font Size', 'Select the font size of your theme', themeName, '--font-size');
const bgColorSetting = genColorSetting('Theme Background Color', 'Select the background color of your theme', themeName, '--bg-color', '#f8f9fb');
const pageColorSetting = genColorSetting('Theme Page Color', 'Select the page color of your theme', themeName, '--page-color', 'rgba(255, 255, 255, 0.95)');
const textColorSetting = genColorSetting('Theme Text Color', 'Select the text color of your theme', themeName, '--text-color', '#3f4758');
const lightTextColorSetting = genColorSetting('Theme Light Text Color', 'Select the light text color of your theme', themeName, '--light-text-color', '#7086a9');
const pageTagColorSetting = genColorSetting('Theme Page Tag Color', 'Select the page tag color of your theme', themeName, '--page-tag-color', '#9dafca');
const colorPrimarySetting = genColorSetting('Theme Primary Color', 'Select the primary color of your theme', themeName, '--color-primary', '#ec6f35');
const colorPrimaryLightSetting = genColorSetting('Theme Primary Light Color', 'Select the light primary color of your theme', themeName, '--color-primary-light', '#ff913c');
const colorPrimaryHighlightSetting = genColorSetting('Theme Primary Highlight Color', 'Select the primary highlight color of your theme', themeName, '--color-primary-highlight', '#fcc1786d');
const colorSecondarySetting = genColorSetting('Theme Secondary Color', 'Select the secondary color of your theme', themeName, '--color-secondary', '#7056f2');
const colorSubtleBorderSetting = genColorSetting('Theme Subtle Border Color', 'Select the subtle border color of your theme', themeName, '--color-subtle-border', '#dbe4e8');

const leyendeckerThemeSettings = [
  headerFontSetting,
  bodyFontSetting,
  codeFontSetting,
  fontSizeSetting,
  bgColorSetting,
  pageColorSetting,
  textColorSetting,
  lightTextColorSetting,
  pageTagColorSetting,
  colorPrimarySetting,
  colorPrimaryLightSetting,
  colorPrimaryHighlightSetting,
  colorSecondarySetting,
  colorSubtleBorderSetting,
];

const loadLeyendeckerThemeSettings = () => {
  leyendeckerThemeSettings.forEach(setting => {
    findStyleRule(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  leyendeckerThemeSettings,
  loadLeyendeckerThemeSettings
}
