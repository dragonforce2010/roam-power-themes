import { ChangeEvent } from 'react';
import { findStyleRuleWithCallBack, genColorSetting, genFontFamilySetting, genFontSizeSetting } from '../../utils/configUtil';

const themeName = '.zenithdecker';
const headerFontSetting = genFontFamilySetting('Theme Header Font', 'Select the header font of your theme', themeName, '--header-font');
const bodyFontSetting = genFontFamilySetting('Theme Body Font', 'Select the body font of your theme', themeName, '--body-font');
const fontSizeSetting = genFontSizeSetting('Theme Font Size', 'Select the font size of your theme', themeName, '--font-size');
const bgColorSetting = genColorSetting('Theme Background Color', 'Select the background color of your theme', themeName, '--bg-color', '#eef3f3');
const pageColorSetting = genColorSetting('Theme Page Color', 'Select the page color of your theme', themeName, '--page-color', 'rgba(255, 255, 255, 0.95)');
const textColorSetting = genColorSetting('Theme Text Color', 'Select the text color of your theme', themeName, '--text-color', '#49556f');
const lightTextColorSetting = genColorSetting('Theme Light Text Color', 'Select the light text color of your theme', themeName, '--light-text-color', '#5c7496');
const iconColorSetting = genColorSetting('Theme Icon Color', 'Select the icon color of your theme', themeName, '--icon-color', '#6a76a1');
const bulletColorSetting = genColorSetting('Theme Bullet Color', 'Select the bullet color of your theme', themeName, '--bullet-color', 'rgba(0, 0, 0, 0.2)');
const pageShadowSetting = genColorSetting('Theme Page Shadow', 'Select the page shadow of your theme', themeName, '--page-shadow', '0px 6px 10px rgba(43, 45, 47, 0.05)');
const blockShadowSetting = genColorSetting('Theme Block Shadow', 'Select the block shadow of your theme', themeName, '--block-shadow', '0px 2px 4px rgba(90, 99, 104, 0.05)');
const colorPrimarySetting = genColorSetting('Theme Primary Color', 'Select the primary color of your theme', themeName, '--color-primary', '#ec6f35');
const colorPrimaryHighlightSetting = genColorSetting('Theme Primary Highlight Color', 'Select the primary highlight color of your theme', themeName, '--color-primary-highlight', '#ffdd99b8');
const colorPrimaryContrastSetting = genColorSetting('Theme Primary Contrast Color', 'Select the primary contrast color of your theme', themeName, '--color-primary-contrast', '#ffffff');
const colorSecondarySetting = genColorSetting('Theme Secondary Color', 'Select the secondary color of your theme', themeName, '--color-secondary', '#8a3cc8');
const colorSecondaryContrastSetting = genColorSetting('Theme Secondary Contrast Color', 'Select the secondary contrast color of your theme', themeName, '--color-secondary-contrast', '#ffffff');
const borderColorSetting = genColorSetting('Theme Border Color', 'Select the border color of your theme', themeName, '--border-color', 'rgba(0, 0, 0, 0.08)');
const subtleBorderColorSetting = genColorSetting('Theme Subtle Border Color', 'Select the subtle border color of your theme', themeName, '--subtle-border-color', 'rgba(0, 0, 0, 0.05)');
const mainBackgroundColorSetting = genColorSetting('Theme Main Background Color', 'Select the main background color of your theme', themeName, '--main-background-color', 'hsl(210, 9%, 98%)');
const bodyBackgroundColorSetting = genColorSetting('Theme Body Background Color', 'Select the body background color of your theme', themeName, '--body-background-color', '#ffffff');
const referenceItemBackgroundSetting = genColorSetting('Theme Reference Item Background Color', 'Select the reference item background color of your theme', themeName, '--reference-item-background', 'hsl(0, 0%, 99%)');

const zenithdeckerThemeSettings = [
  headerFontSetting,
  bodyFontSetting,
  fontSizeSetting,
  bgColorSetting,
  pageColorSetting,
  textColorSetting,
  lightTextColorSetting,
  iconColorSetting,
  bulletColorSetting,
  pageShadowSetting,
  blockShadowSetting,
  colorPrimarySetting,
  colorPrimaryHighlightSetting,
  colorPrimaryContrastSetting,
  colorSecondarySetting,
  colorSecondaryContrastSetting,
  borderColorSetting,
  subtleBorderColorSetting,
  mainBackgroundColorSetting,
  bodyBackgroundColorSetting,
  referenceItemBackgroundSetting,
];

const loadZenithdeckerThemeSettings = () => {
  zenithdeckerThemeSettings.forEach(setting => {
    findStyleRuleWithCallBack(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  zenithdeckerThemeSettings,
  loadZenithdeckerThemeSettings
}
