import { ExtensionAPI, PanelConfig } from '../types';
import { THEME_BEAR_GOTHAM, THEME_BEAR_PANIC, THEME_BUBBLEGUM_DARK, THEME_BUBBLEGUM_LIGHT, THEME_CAESAR_LIGHT, THEME_DARKAGE, THEME_DRACULA, THEME_FLOAT, THEME_GAMBLER, THEME_HIPSTER1, THEME_HIPSTER2, THEME_LEYENDARKER, THEME_LILAC_DARK, THEME_LILAC_LIGHT, THEME_MAGAZINE, THEME_MERMAID_DARK, THEME_MERMAID_LIGHT, THEME_NIGHT_OWLISH, THEME_RAILS_ORANGE, THEME_RAILS_PURPLE, THEME_TOKIWA, THEME_ZENITHDECKER, roamThemeSettingKey } from './constants';
import { initTheme, updateTheme } from './theme-manager';
import { bearpanicThemeSettings, loadBearpanicThemeSettings } from './themes/bearpanic/bearpanic-config';
import { bubblegumDarkThemeSettings, loadBubblegumDarkThemeSettings } from './themes/bubblegum/bugglegum-dark-config'
import { bubblegumLightThemeSettings, loadbubblegumLightThemeSettings } from './themes/bubblegum/bugglegum-light-config'


let themeDetailSettings: any = []
const themeSetting: any = {
  id: "roam_default_theme",
  name: "Select the default theme",
  description: `Select the default theme`,
  action: {
    type: 'select',
    items: [
      THEME_BEAR_GOTHAM,
      THEME_BEAR_PANIC,
      THEME_BUBBLEGUM_DARK,
      THEME_BUBBLEGUM_LIGHT,
      THEME_CAESAR_LIGHT,
      THEME_DARKAGE,
      THEME_DRACULA,
      THEME_FLOAT,
      THEME_GAMBLER,
      THEME_HIPSTER1,
      THEME_HIPSTER2,
      THEME_LEYENDARKER,
      THEME_LEYENDARKER,
      THEME_LILAC_DARK,
      THEME_LILAC_LIGHT,
      THEME_MAGAZINE,
      THEME_MERMAID_DARK,
      THEME_MERMAID_LIGHT,
      THEME_NIGHT_OWLISH,
      THEME_RAILS_ORANGE,
      THEME_RAILS_PURPLE,
      THEME_TOKIWA,
      THEME_ZENITHDECKER,
    ],
    onChange(e: any) {
      const selectedTheme = e.toString()
      updateTheme(selectedTheme);
      switch (selectedTheme) {
        case THEME_BEAR_PANIC:
          themeDetailSettings = bearpanicThemeSettings
          loadBearpanicThemeSettings()
          break;
        case THEME_BUBBLEGUM_LIGHT:
          themeDetailSettings = bubblegumLightThemeSettings
          loadbubblegumLightThemeSettings()
          break
        case THEME_BUBBLEGUM_DARK:
          themeDetailSettings = bubblegumDarkThemeSettings
          loadBubblegumDarkThemeSettings()
          break
        default:
          themeDetailSettings = []
      }
      initConfigPanel()
    },
  }
};


// 定义一个panelConfig函数，接收一个onChange参数，返回一个PanelConfig对象
const panelConfig = (): PanelConfig => {
  // 返回一个PanelConfig对象，其中tabTitle属性为"Roam Power Themes"，settings属性为一个themeSetting
  return {
    tabTitle: "Roam Power Themes",
    settings: [
      themeSetting,
      ...themeDetailSettings
    ]
  }
}

const initConfigPanel = () => {
  window.extensionAPI.settings.panel.create(panelConfig());
}

const initConfig = () => {
  initConfigPanel()
  initTheme()
}

export { initConfig }