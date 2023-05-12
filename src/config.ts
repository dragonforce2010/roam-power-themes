import { ExtensionAPI, PanelConfig } from '../types';

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
            "bear-gotham",
            "bear-panic",
            "bubblegum-dark",
            "bubblegum-light",
            "caesar-light",
            "darkage",
            "dracula",
            "float",
            "gambler",
            "hipster1",
            "hipster2",
            "leyendarker",
            "leyendecker",
            "lilac-dark",
            "lilac-light",
            "magazine",
            "mermaid-dark",
            "mermaid-light",
            "night-owlish",
            "rails-orange",
            "rails-purple",
            "tokiwa",
            "zenithdecker"
          ],
          onChange(e: any) {
            onChange(e.toString())
          },
        }
      }
    ]
  }
}

export const loadSettings = (extensionAPI: ExtensionAPI, defaultTheme: string, updateTheme: Function) => {
  extensionAPI.settings.panel.create(panelConfig(updateTheme));
  const currentTheme = extensionAPI.settings.get('roam_default_theme')
  if (!currentTheme)
    extensionAPI.settings.set('roam_default_theme', defaultTheme)
}