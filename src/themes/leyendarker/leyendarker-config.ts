import { ChangeEvent } from 'react';
import { findStyleRule, genColorSetting, genFontFamilySetting, genFontSizeSetting } from '../../utils/configUtil';

const themeName = '.leyendarker';
const headerFontSetting = genFontFamilySetting('Header Font', 'Select the font for headers in your theme', themeName, '--header-font');
const bodyFontSetting = genFontFamilySetting('Body Font', 'Select the font for body text in your theme', themeName, '--body-font');
const fontSizeSetting = genFontSizeSetting('Font Size', 'Select the base font size for your theme', themeName, '--font-size');
const bgColorSetting = genColorSetting('Background Color', 'Select the background color for your theme', themeName, '--bg-color', '#141820');
const pageColorSetting = genColorSetting('Page Color', 'Select the color for page elements in your theme', themeName, '--page-color', '#2d3037');
const mainBackgroundColorSetting = genColorSetting('Main Background Color', 'Select the main background color for your theme', themeName, '--main-background-color', '#2a2e36');
const textColorSetting = genColorSetting('Text Color', 'Select the text color for your theme', themeName, '--text-color', '#4c6b8a');
const lightTextColorSetting = genColorSetting('Light Text Color', 'Select the color for light text elements in your theme', themeName, '--light-text-color', '#759bc1');
const iconColorSetting = genColorSetting('Icon Color', 'Select the color for icons in your theme', themeName, '--icon-color', '#7ea8d3');
const bulletColorSetting = genColorSetting('Bullet Color', 'Select the color for bullets in your theme', themeName, '--bullet-color', 'rgba(0, 0, 0, 0.2)');
const selectionColorSetting = genColorSetting('Selection Color', 'Select the color for selected elements in your theme', themeName, '--selection-color', '#6b4cb4c4');
const pageShadowSetting = genColorSetting('Page Shadow', 'Select the shadow color for page elements in your theme', themeName, '--page-shadow', '0px 6px 10px rgba(43, 45, 47, 0.05)');
const blockShadowSetting = genColorSetting('Block Shadow', 'Select the shadow color for blocks in your theme', themeName, '--block-shadow', '0px 2px 4px rgba(90, 99, 104, 0.05)');
const colorPrimarySetting = genColorSetting('Primary Color', 'Select the primary color for your theme', themeName, '--color-primary', '#cd7f52');
const colorPrimaryHighlightSetting = genColorSetting('Primary Color Highlight', 'Select the highlight color for the primary color in your theme', themeName, '--color-primary-highlight', '#ffdd99b8');
const colorPrimaryContrastSetting = genColorSetting('Primary Color Contrast', 'Select the contrast color for the primary color in your theme', themeName, '--color-primary-contrast', '#ffffff');
const colorSecondarySetting = genColorSetting('Secondary Color', 'Select the secondary color for your theme', themeName, '--color-secondary', '#8c7beb');
const colorSecondaryContrastSetting = genColorSetting('Secondary Color Contrast', 'Select the contrast color for the secondary color in your theme', themeName, '--color-secondary-contrast', '#ffffff');
const borderColorSetting = genColorSetting('Border Color', 'Select the border color for your theme', themeName, '--border-color', '#374356');
const subtleBorderColorSetting = genColorSetting('Subtle Border Color', 'Select the subtle border color for your theme', themeName, '--subtle-border-color', '#374153');
const bodyBackgroundColorSetting = genColorSetting('Body Background Color', 'Select the background color for the body in your theme', themeName, '--body-background-color', '#343639');
const referenceItemBackgroundSetting = genColorSetting('Reference Item Background', 'Select the background color for reference items in your theme', themeName, '--reference-item-background', 'hsl(212, 6%, 25%)');

const leyendarkerThemeSettings = [
  headerFontSetting,
  bodyFontSetting,
  fontSizeSetting,
  bgColorSetting,
  pageColorSetting,
  mainBackgroundColorSetting,
  textColorSetting,
  lightTextColorSetting,
  iconColorSetting,
  bulletColorSetting,
  selectionColorSetting,
  pageShadowSetting,
  blockShadowSetting,
  colorPrimarySetting,
  colorPrimaryHighlightSetting,
  colorPrimaryContrastSetting,
  colorSecondarySetting,
  colorSecondaryContrastSetting,
  borderColorSetting,
  subtleBorderColorSetting,
  bodyBackgroundColorSetting,
  referenceItemBackgroundSetting,
];

const loadLeyendarkerThemeSettings = () => {
  leyendarkerThemeSettings.forEach(setting => {
    findStyleRule(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    });
  });
};

export {
  leyendarkerThemeSettings,
  loadLeyendarkerThemeSettings
};
