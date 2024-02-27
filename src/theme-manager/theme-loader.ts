import { ThemeConfig } from './theme-config';

import allThemes from './theme-data.json';
import getThemeTemplateWithDefaultConfigValue from './theme-template';

const loadAllThemes = (): ThemeConfig[] => {

  console.log('TestLog: ~ loadAllThemes ~ loadAllThemes:', loadAllThemes)

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
        if (item.name === key && typeof item.value === 'string') {
          item.value = (themeData.configItems as { [key: string]: number | string })[key]
        }
      })
    }

    allThemeConigs.push(themeConfig)
  }

  return allThemeConigs
}

export {
  loadAllThemes
};
