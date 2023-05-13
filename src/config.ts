import { ExtensionAPI, PanelConfig } from '../types';
import { THEME_BEAR_GOTHAM, THEME_BEAR_PANIC, THEME_BUBBLEGUM_DARK, THEME_BUBBLEGUM_LIGHT, THEME_CAESAR_LIGHT, THEME_DARKAGE, THEME_DRACULA, THEME_FLOAT, THEME_GAMBLER, THEME_HIPSTER1, THEME_HIPSTER2, THEME_LEYENDARKER, THEME_LILAC_DARK, THEME_LILAC_LIGHT, THEME_MAGAZINE, THEME_MERMAID_DARK, THEME_MERMAID_LIGHT, THEME_NIGHT_OWLISH, THEME_RAILS_ORANGE, THEME_RAILS_PURPLE, THEME_TOKIWA, THEME_ZENITHDECKER, roamThemeSettingKey } from './constants';

const panelConfig = (onChange: Function): PanelConfig => {
  return {
    tabTitle: "Roam Power Themes",
    settings: [
      {
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
            onChange(e.toString())
          },
        }
      }
    ]
  }
}

export const loadSettings = (extensionAPI: ExtensionAPI, updateTheme: Function) => {
  extensionAPI.settings.panel.create(panelConfig(updateTheme));
  const currentTheme = extensionAPI.settings.get(roamThemeSettingKey)
  if (!currentTheme) {
    extensionAPI.settings.set(roamThemeSettingKey, currentTheme)
  } else {
    updateTheme(currentTheme)
  }
}