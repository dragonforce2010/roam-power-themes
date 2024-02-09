import { ChangeEvent } from 'react';
import { findStyleRuleWithCallBack, genColorSetting } from '../../utils/configUtil';

const themeName = '.gambler';

const colorGreenSetting = genColorSetting('Color Green', 'Select the color green for your theme', themeName, '--color-green', '#50fa7b');
const colorOrangeSetting = genColorSetting('Color Orange', 'Select the color orange for your theme', themeName, '--color-orange', '#ffb86c');
const colorBlueSetting = genColorSetting('Color Blue', 'Select the color blue for your theme', themeName, '--color-blue', '#8be9fd');
const colorPurpleSetting = genColorSetting('Color Purple', 'Select the color purple for your theme', themeName, '--color-purple', '#bd93f9');
const colorPinkSetting = genColorSetting('Color Pink', 'Select the color pink for your theme', themeName, '--color-pink', '#ff79c6');
const colorRedSetting = genColorSetting('Color Red', 'Select the color red for your theme', themeName, '--color-red', '#ff5555');
const colorYellowSetting = genColorSetting('Color Yellow', 'Select the color yellow for your theme', themeName, '--color-yellow', '#f1fa8c');
const colorBackgroundSetting = genColorSetting('Color Background', 'Select the background color for your theme', themeName, '--color-background', '#282a36');
const colorForegroundSetting = genColorSetting('Color Foreground', 'Select the foreground color for your theme', themeName, '--color-foreground', '#f8f8f2');
const colorForegroundFadedSetting = genColorSetting('Color Foreground Faded', 'Select the faded foreground color for your theme', themeName, '--color-foreground-faded', '#6272a4');
const colorForegroundFadedBrightSetting = genColorSetting('Color Foreground Faded Bright', 'Select the brightened faded foreground color for your theme', themeName, '--color-foreground-faded-bright', '#7a8cc4');
const colorBackgroundSecondarySetting = genColorSetting('Color Background Secondary', 'Select the secondary background color for your theme', themeName, '--color-background-secondary', '#353848');
const colorBackgroundCurrentSetting = genColorSetting('Color Background Current', 'Select the current background color for your theme', themeName, '--color-background-current', '#44475a');
const colorBackgroundDarkSetting = genColorSetting('Color Background Dark', 'Select the dark background color for your theme', themeName, '--color-background-dark', '#212431');
const colorForegroundFaded50Setting = genColorSetting('Color Foreground Faded 50', 'Select the 50% faded foreground color for your theme', themeName, '--color-foreground-faded-50', 'rgba(98, 114, 164, 0.5)');
const colorDarken15Setting = genColorSetting('Color Darken 15', '', themeName, '--color-darken-15', 'rgb(0, 0, 0, 0.15)');
const colorDarken25Setting = genColorSetting('Color Darken 25', '', themeName, '--color-darken-25', 'rgb(0, 0, 0, 0.25)');
const colorBrighten3Setting = genColorSetting('Color Brighten 3', '', themeName, '--color-brighten-3', 'rgb(200, 205, 230, 0.03)');
const colorBrighten5Setting = genColorSetting('Color Brighten 5', '', themeName, '--color-brighten-5', 'rgb(200, 205, 230, 0.05)');
const colorBrighten10Setting = genColorSetting('Color Brighten 10', '', themeName, '--color-brighten-10', 'rgb(200, 205, 230, 0.1)');
const colorBrighten15Setting = genColorSetting('Color Brighten 15', '', themeName, '--color-brighten-15', 'rgb(200, 205, 230, 0.15)');
const colorBrighten25HighlightSetting = genColorSetting('Color Brighten 25 Highlight', '', themeName, '--color-brighten-25-highlight', 'rgba(251, 234, 0, 0.25)');
const colorBrighten25Setting = genColorSetting('Color Brighten 25', '', themeName, '--color-brighten-25', 'rgba(255, 255, 255, 0.25)');
const colorBrighten90Setting = genColorSetting('Color Brighten 90', '', themeName, '--color-brighten-90', 'rgb(200, 205, 230, 0.9)');
const colorBrighten30Setting = genColorSetting('Color Brighten 30', '', themeName, '--color-brighten-30', 'rgb(200, 205, 230, 0.3)');

const gamblerThemeSettings = [
  colorGreenSetting,
  colorOrangeSetting,
  colorBlueSetting,
  colorPurpleSetting,
  colorPinkSetting,
  colorRedSetting,
  colorYellowSetting,
  colorBackgroundSetting,
  colorForegroundSetting,
  colorForegroundFadedSetting,
  colorForegroundFadedBrightSetting,
  colorBackgroundSecondarySetting,
  colorBackgroundCurrentSetting,
  colorBackgroundDarkSetting,
  colorForegroundFaded50Setting,
  colorDarken15Setting,
  colorDarken25Setting,
  colorBrighten3Setting,
  colorBrighten5Setting,
  colorBrighten10Setting,
  colorBrighten15Setting,
  colorBrighten25HighlightSetting,
  colorBrighten25Setting,
  colorBrighten90Setting,
  colorBrighten30Setting,
];

const loadGamblerThemeSettings = () => {
  gamblerThemeSettings.forEach(setting => {
    findStyleRuleWithCallBack(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    });
  });
};

export {
  gamblerThemeSettings,
  loadGamblerThemeSettings
};
