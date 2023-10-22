import { ChangeEvent } from 'react';
import { findStyleRule, genColorSetting } from '../../utils/configUtil';

const themeName = '.mermaid-dark';
const backgroundColourSetting = genColorSetting('Theme Background Colour', 'Select the background colour of your theme', themeName, '--background-colour', '#eff2f1');
const edgesColourSetting = genColorSetting('Theme Edges Colour', 'Select the edges colour of your theme', themeName, '--edges-colour', '#dcdcdc');
const edgesColourSemiTransparentSetting = genColorSetting('Theme Edges Colour Semi-Transparent', 'Select the semi-transparent edges colour of your theme', themeName, '--edges-colour-semi-transparent', 'rgb(220, 220, 220, 0.2)');
const contrastColourSetting = genColorSetting('Theme Contrast Colour', 'Select the contrast colour of your theme', themeName, '--contrast-colour', '#333333');
const titleColourSetting = genColorSetting('Theme Title Colour', 'Select the title colour of your theme', themeName, '--title-colour', '#39a2ae');
const highlightColour1Setting = genColorSetting('Theme Highlight Colour 1', 'Select the first highlight colour of your theme', themeName, '--highlight-colour-1', '#cc76a1');

const mermaidDarkThemeSettings = [
  backgroundColourSetting,
  edgesColourSetting,
  edgesColourSemiTransparentSetting,
  contrastColourSetting,
  titleColourSetting,
  highlightColour1Setting,
];

const loadmermaidDarkThemeSettings = () => {
  mermaidDarkThemeSettings.forEach(setting => {
    findStyleRule(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  mermaidDarkThemeSettings,
  loadmermaidDarkThemeSettings
}
