import { ExtensionAPI, PanelConfig } from '../../types';
import { THEME_BEAR_GOTHAM, THEME_BEAR_PANIC, THEME_BUBBLEGUM_DARK, THEME_BUBBLEGUM_LIGHT, THEME_CAESAR_LIGHT, THEME_DARKAGE, THEME_DRACULA, THEME_FLOAT, THEME_GAMBLER, THEME_HIPSTER1, THEME_HIPSTER2, THEME_LEYENDARKER, THEME_LEYENDECKER, THEME_LILAC_DARK, THEME_LILAC_LIGHT, THEME_MAGAZINE, THEME_MERMAID_DARK, THEME_MERMAID_LIGHT, THEME_NIGHT_OWLISH, THEME_RAILS_ORANGE, THEME_RAILS_PURPLE, THEME_TOKIWA, THEME_ZENITHDECKER, roamThemeSettingKey } from '../common/constants';
import { initTheme, updateTheme } from '../theme-manager/theme-manager';
import { bearpanicThemeSettings, loadBearpanicThemeSettings } from '../themes/bearpanic/bearpanic-config';
import { bubblegumDarkThemeSettings, loadBubblegumDarkThemeSettings } from '../themes/bubblegum/bugglegum-dark-config'
import { bubblegumLightThemeSettings, loadBubblegumLightThemeSettings } from '../themes/bubblegum/bugglegum-light-config'
import { gamblerThemeSettings, loadGamblerThemeSettings } from '../themes/gambler/gambler-config'
import { darkageThemeSettings, loadDarkageThemeSettings } from '../themes/darkage/darkage-config'
import { draculaThemeSettings, loadDraculaThemeSettings } from '../themes/dracula/dracula-config'
import { leyendarkerThemeSettings, loadLeyendarkerThemeSettings } from '../themes/leyendarker/leyendarker-config'
import { leyendeckerThemeSettings, loadLeyendeckerThemeSettings } from '../themes/leyendecker/leyendecker-config'
import { lilacDarkThemeSettings, loadLilacDarkThemeSettings } from '../themes/lilac/lilac-dark-config'
import { lilacLightThemeSettings, loadLilacLightThemeSettings } from '../themes/lilac/lilac-light-config'
import { loadmermaidDarkThemeSettings, mermaidDarkThemeSettings } from '../themes/mermaid/mermaid-dark-config'
import { loadMermaidLightThemeSettings, mermaidLightThemeSettings } from '../themes/mermaid/mermaid-light-config'
import { loadRailsPurpleThemeSettings, railsPurpleThemeSettings } from '../themes/rails/rails-purple-config'
import { loadTokiwaThemeSettings, tokiwaThemeSettings } from '../themes/tokiwa/tokiwa-config'
import { loadZenithdeckerThemeSettings, zenithdeckerThemeSettings } from '../themes/zenithdecker/zenithdecker-config'


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
          loadBubblegumLightThemeSettings()
          break
        case THEME_BUBBLEGUM_DARK:
          themeDetailSettings = bubblegumDarkThemeSettings
          loadBubblegumDarkThemeSettings()
          break
        case THEME_DARKAGE:
          themeDetailSettings = darkageThemeSettings
          loadDarkageThemeSettings()
          break
        case THEME_DRACULA:
          themeDetailSettings = draculaThemeSettings
          loadDraculaThemeSettings()
          break
        case THEME_GAMBLER:
          themeDetailSettings = gamblerThemeSettings
          loadGamblerThemeSettings()
          break
        case THEME_LEYENDARKER:
          themeDetailSettings = leyendarkerThemeSettings
          loadLeyendarkerThemeSettings()
          break
        case THEME_LEYENDECKER:
          themeDetailSettings = leyendeckerThemeSettings
          loadLeyendeckerThemeSettings()
          break
        case THEME_LILAC_DARK:
          themeDetailSettings = lilacDarkThemeSettings
          loadLilacDarkThemeSettings()
          break
        case THEME_LILAC_LIGHT:
          themeDetailSettings = lilacLightThemeSettings
          loadLilacLightThemeSettings()
          break
        case THEME_MERMAID_DARK:
          themeDetailSettings = mermaidDarkThemeSettings
          loadmermaidDarkThemeSettings()
          break
        case THEME_MERMAID_LIGHT:
          themeDetailSettings = mermaidLightThemeSettings
          loadMermaidLightThemeSettings()
          break
        case THEME_RAILS_PURPLE:
          themeDetailSettings = railsPurpleThemeSettings
          loadRailsPurpleThemeSettings()
          break
        case THEME_TOKIWA:
          themeDetailSettings = tokiwaThemeSettings
          loadTokiwaThemeSettings()
          break
        case THEME_ZENITHDECKER:
          themeDetailSettings = zenithdeckerThemeSettings
          loadZenithdeckerThemeSettings()
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