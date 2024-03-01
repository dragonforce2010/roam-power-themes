import { CURRENT_THEME_NAME, roamThemeSettingKey } from '../common/constants';
import { ThemeConfig } from './theme-config';

import allThemes from './theme-data.json';
import getThemeTemplateWithDefaultConfigValue from './theme-template';

const loadAllThemes = (): ThemeConfig[] => {
  let allThemeConigs: ThemeConfig[] = []
  for (let themeData of allThemes) {
    const themeConfig = getThemeTemplateWithDefaultConfigValue()

    // apply theme config values
    themeConfig.name = themeData["name"]
    themeConfig.label = themeData["label"]
    themeConfig.type = themeData["type"] === 'dark' ? 'dark' : 'light'
    themeConfig.coverUrl = themeData["coverUrl"]
    themeConfig.commandLabel = themeData["commandLabel"]
    for (let key of Object.keys(themeData.configItems || [])) {
      themeConfig.configItems.forEach(item => {
        if (item.name === key) {
          item.value = (themeData.configItems as { [key: string]: number | string })[key]
        }
      })
    }

    allThemeConigs.push(themeConfig)
  }

  return allThemeConigs
}

const loadCurrentTheme = (): ThemeConfig => {
  const allThemes = loadAllThemes()
  const currentThemeName = window.extensionAPI.settings.get(CURRENT_THEME_NAME)
  if (currentThemeName) {
    return allThemes.find(theme => theme.name === currentThemeName) ?? allThemes[0]
  }
  return allThemes[0]
}

export {
  loadAllThemes,
  loadCurrentTheme
};
