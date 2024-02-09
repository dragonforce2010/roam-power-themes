import { findStyleRuleWithCallBack, genColorSetting, genFontFamilySetting, genFontSizeSetting, genFontWeightSetting } from '../../utils/configUtil';
import { ChangeEvent } from 'react';

const themeName = '.bubblegum-dark'
const backgroundColourSetting = genColorSetting('Theme Background Color', 'Select the background color of your theme', themeName, '--background-colour', '#333333');
const edgesColourSetting = genColorSetting('Theme Edges Color', 'Select the edges color of your theme', themeName, '--edges-colour', '#394b59');
const edgesColourSemiTransparentSetting = genColorSetting('Theme Edges Color (Semi-Transparent)', 'Select the semi-transparent edges color of your theme', themeName, '--edges-colour-semi-transparent', '#394b59');
const contrastColourSetting = genColorSetting('Theme Contrast Color', 'Select the contrast color of your theme', themeName, '--contrast-colour', '#eaeaea');
const titleColourSetting = genColorSetting('Theme Title Color', 'Select the title color of your theme', themeName, '--title-colour', '#e573ac');
const highlightColour1Setting = genColorSetting('Theme Highlight Color 1', 'Select the first highlight color of your theme', themeName, '--highlight-colour-1', '#e6a1cd');
const commandPaletteActiveBackgroundSetting = genColorSetting('Theme Command Palette Active Background', 'Select the active background color of the command palette', themeName, '--command-palette-active-background', '#576d84');
const commandPaletteShortcutBackgroundSetting = genColorSetting('Theme Command Palette Shortcut Background', 'Select the shortcut background color of the command palette', themeName, '--command-palette-shortcut-background', '#576d84');
const headingFontSizeSetting = genFontSizeSetting('Theme Heading Font Size', 'Select the font size of headings in your theme', themeName, '--heading-font-size');
const level1FontSizeSetting = genFontSizeSetting('Theme Level 1 Font Size', 'Select the font size of level 1 headings in your theme', themeName, '--level1-font-size');
const level2FontSizeSetting = genFontSizeSetting('Theme Level 2 Font Size', 'Select the font size of level 2 headings in your theme', themeName, '--level2-font-size');
const level3FontSizeSetting = genFontSizeSetting('Theme Level 3 Font Size', 'Select the font size of level 3 headings in your theme', themeName, '--level3-font-size');
const rmLevel1FontWeightSetting = genFontWeightSetting('Theme Level 1 Font Weight', 'Select the font weight of level 1 headings in your theme', themeName, '--rm-level1-font-weight', '800')
const rmLevel2FontWeightSetting = genFontWeightSetting('Theme Level 2 Font Weight', 'Select the font weight of level 2 headings in your theme', themeName, '--rm-level2-font-weight', '700')
const rmLevel3FontWeightSetting = genFontWeightSetting('Theme Level 3 Font Weight', 'Select the font weight of level 3 headings in your theme', themeName, '--rm-level3-font-weight', '600')

const bubblegumDarkThemeSettings = [
  backgroundColourSetting,
  edgesColourSetting,
  edgesColourSemiTransparentSetting,
  contrastColourSetting,
  titleColourSetting,
  highlightColour1Setting,
  commandPaletteActiveBackgroundSetting,
  commandPaletteShortcutBackgroundSetting,
  headingFontSizeSetting,
  level1FontSizeSetting,
  level2FontSizeSetting,
  level3FontSizeSetting,
  rmLevel1FontWeightSetting,
  rmLevel2FontWeightSetting,
  rmLevel3FontWeightSetting,
];


const loadBubblegumDarkThemeSettings = () => {
  bubblegumDarkThemeSettings.forEach(setting => {
    findStyleRuleWithCallBack(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
};

export {
  bubblegumDarkThemeSettings,
  loadBubblegumDarkThemeSettings
};
