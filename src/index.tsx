import './bearpanic.css'
import './bubblegum-dark.css'
import './bubblegum-light.css'
import './caesar-light.css'
import './darkage.css'
import './dracula.css'
import './float.css'
import './gambler.css'
import './gotham.css'
import './hipster1.css'
import './hipster2.css'
import './leyendarker.css'
import './leyendecker.css'
import './lilac-dark.css'
import './lilac-light.css'
import './magazine.css'
import './mermaid-dark.css'
import './mermaid-light.css'
import './night-owl.css'
import './rails-purple.css'
import './rails.css'
import './tokiwa.css'
import './zenithdecker.css'

import { ExtensionAPI, OnloadArgs } from '../types'
import { loadSettings } from './config'


const themConfigKey = 'themConfig'
let interval: NodeJS.Timer
let currentTheme = ""
let prevTheme = ""
let defaultTheme = "darkage"

let themeConfig = [
  {
    extensionName: 'roam-theme-bear-gotham',
    themeKey: 'bear-gotham',
    commandLabel: 'Roam Theme: Bear Gotham',
  },
  {
    extensionName: 'roam-theme-bear-panic',
    themeKey: 'bear-panic',
    commandLabel: 'Roam Theme: Bear Panic',
  },
  {
    extensionName: 'roam-theme-bubblegum-dark',
    themeKey: 'bubblegum-dark',
    commandLabel: 'Roam Theme: Bubblegum Dark',
  },
  {
    extensionName: 'roam-theme-bubblegum-light',
    themeKey: 'bubblegum-light',
    commandLabel: 'Roam Theme: Bubblegum Light',
  },
  {
    extensionName: 'roam-theme-caesar-light',
    themeKey: 'caesar-light',
    commandLabel: 'Roam Theme: Caesar Light',
  },
  {
    extensionName: 'roam-theme-darkage',
    themeKey: 'darkage',
    commandLabel: 'Roam Theme: Dark Age',
  },
  {
    extensionName: 'roam-theme-dracula',
    themeKey: 'dracula',
    commandLabel: 'Roam Theme: Dracula',
  },
  {
    extensionName: 'roam-theme-float',
    themeKey: 'float',
    commandLabel: 'Roam Theme: Float',
  },
  {
    extensionName: 'roam-theme-gambler',
    themeKey: 'gambler',
    commandLabel: 'Roam Theme: Gambler',
  },
  {
    extensionName: 'roam-theme-hipster1',
    themeKey: 'hipster1',
    commandLabel: 'Roam Theme: Hipster1',
  },
  {
    extensionName: 'roam-theme-hipster2',
    themeKey: 'hipster2',
    commandLabel: 'Roam Theme: Hipster2',
  },
  {
    extensionName: 'roam-theme-leyendarker',
    themeKey: 'leyendarker',
    commandLabel: 'Roam Theme: Leyendarker',
  },
  {
    extensionName: 'roam-theme-leyendecker',
    themeKey: 'leyendecker',
    commandLabel: 'Roam Theme: Leyendecker',
  },
  {
    extensionName: 'roam-theme-lilac-dark',
    themeKey: 'lilac-dark',
    commandLabel: 'Roam Theme: Lilac Dark',
  },
  {
    extensionName: 'roam-theme-lilac-light',
    themeKey: 'lilac-light',
    commandLabel: 'Roam Theme: Lilac Light',
  },
  {
    extensionName: 'roam-theme-magazine',
    themeKey: 'magazine',
    commandLabel: 'Roam Theme: Magazine',
  },
  {
    extensionName: 'roam-theme-mermaid-dark',
    themeKey: 'mermaid-dark',
    commandLabel: 'Roam Theme: Mermaid Dark',
  },
  {
    extensionName: 'roam-theme-mermaid-light',
    themeKey: 'mermaid-light',
    commandLabel: 'Roam Theme: Mermaid Light',
  },
  {
    extensionName: 'roam-theme-night-owlish',
    themeKey: 'night-owlish',
    commandLabel: 'Roam Theme: Night Owlish',
  },
  {
    extensionName: 'roam-theme-rails-orange',
    themeKey: 'rails-orange',
    commandLabel: 'Roam Theme: Rails Orange',
  },
  {
    extensionName: 'roam-theme-rails-purple',
    themeKey: 'rails-purple',
    commandLabel: 'Roam Theme: Rails Purple',
  },
  {
    extensionName: 'roam-theme-tokiwa',
    themeKey: 'tokiwa',
    commandLabel: 'Roam Theme: Tokiwa',
  },
  {
    extensionName: 'roam-theme-zenithedecker',
    themeKey: 'zenithdecker',
    commandLabel: 'Roam Theme: Zenithedecker',
  },
]


const registeThemeCommands = () => {
  for (let config of themeConfig) {
    window.extensionAPI.ui
      .commandPalette
      .addCommand({
        label: config.commandLabel,
        callback: () => {
          switchRoamTheme(config.themeKey)
        }
      })
  }
}

const removeThemeCommands = () => {
  for (let config of themeConfig) {
    window.extensionAPI.ui
      .commandPalette
      .removeCommand({ label: config.commandLabel })
  }
}


const roamThemeSettingKey = 'roam_default_theme'
const switchRoamTheme = (newTheme: string) => {
  window.extensionAPI.settings.set(roamThemeSettingKey, newTheme).then(() => {
    updateTheme(newTheme)
  })

}

function onload({ extensionAPI }: OnloadArgs) {
  window.extensionAPI = extensionAPI
  loadSettings(extensionAPI, defaultTheme, updateTheme)
  updateTheme(defaultTheme)

  registeThemeCommands()
}

function updateTheme(newTheme: string) {
  prevTheme = currentTheme
  currentTheme = newTheme
  if (prevTheme) document.body.classList.remove(prevTheme)
  if (currentTheme) document.body.classList.add(currentTheme)
}

function onunload() {
  removeThemeCommands()
  document.body.classList.remove(currentTheme)
  clearInterval(interval)
}

export default {
  onload: onload,
  onunload: onunload,
}