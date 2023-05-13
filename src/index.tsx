import './themes/bearpanic.css'
import './themes/bubblegum-dark.css'
import './themes/bubblegum-light.css'
import './themes/caesar-light.css'
import './themes/darkage.css'
import './themes/dracula.css'
import './themes/float.css'
import './themes/gambler.css'
import './themes/gotham.css'
import './themes/hipster1.css'
import './themes/hipster2.css'
import './themes/leyendarker.css'
import './themes/leyendecker.css'
import './themes/lilac-dark.css'
import './themes/lilac-light.css'
import './themes/magazine.css'
import './themes/mermaid-dark.css'
import './themes/mermaid-light.css'
import './themes/night-owl.css'
import './themes/rails-purple.css'
import './themes/rails.css'
import './themes/tokiwa.css'
import './themes/zenithdecker.css'

import { ExtensionAPI, OnloadArgs } from '../types'
import { loadSettings } from './config'
import { THEME_BEAR_GOTHAM, THEME_BEAR_PANIC, THEME_BUBBLEGUM_DARK, THEME_BUBBLEGUM_LIGHT, THEME_CAESAR_LIGHT, THEME_DARKAGE, THEME_DRACULA, THEME_FLOAT, THEME_GAMBLER, THEME_HIPSTER1, THEME_HIPSTER2, THEME_LEYENDARKER, THEME_LEYENDECKER, THEME_LILAC_DARK, THEME_LILAC_LIGHT, THEME_MAGAZINE, THEME_MERMAID_DARK, THEME_MERMAID_LIGHT, THEME_NIGHT_OWLISH, THEME_RAILS_ORANGE, THEME_RAILS_PURPLE, THEME_TOKIWA, THEME_ZENITHDECKER, roamThemeSettingKey } from './constants'


const themConfigKey = 'themConfig'
let interval: NodeJS.Timer
let currentTheme = ""
let prevTheme = ""

let themeConfig = [
  {
    themeKey: THEME_BEAR_GOTHAM,
    commandLabel: 'Roam Theme: Bear Gotham',
  },
  {
    themeKey: THEME_BEAR_PANIC,
    commandLabel: 'Roam Theme: Bear Panic',
  },
  {
    themeKey: THEME_BUBBLEGUM_DARK,
    commandLabel: 'Roam Theme: Bubblegum Dark',
  },
  {
    themeKey: THEME_BUBBLEGUM_LIGHT,
    commandLabel: 'Roam Theme: Bubblegum Light',
  },
  {
    themeKey: THEME_CAESAR_LIGHT,
    commandLabel: 'Roam Theme: Caesar Light',
  },
  {
    themeKey: THEME_DARKAGE,
    commandLabel: 'Roam Theme: Dark Age',
  },
  {
    themeKey: THEME_DRACULA,
    commandLabel: 'Roam Theme: Dracula',
  },
  {
    themeKey: THEME_FLOAT,
    commandLabel: 'Roam Theme: Float',
  },
  {
    themeKey: THEME_GAMBLER,
    commandLabel: 'Roam Theme: Gambler',
  },
  {
    themeKey: THEME_HIPSTER1,
    commandLabel: 'Roam Theme: Hipster1',
  },
  {
    themeKey: THEME_HIPSTER2,
    commandLabel: 'Roam Theme: Hipster2',
  },
  {
    themeKey: THEME_LEYENDARKER,
    commandLabel: 'Roam Theme: Leyendarker',
  },
  {
    themeKey: THEME_LEYENDECKER,
    commandLabel: 'Roam Theme: Leyendecker',
  },
  {
    themeKey: THEME_LILAC_DARK,
    commandLabel: 'Roam Theme: Lilac Dark',
  },
  {
    themeKey: THEME_LILAC_LIGHT,
    commandLabel: 'Roam Theme: Lilac Light',
  },
  {
    themeKey: THEME_MAGAZINE,
    commandLabel: 'Roam Theme: Magazine',
  },
  {
    themeKey: THEME_MERMAID_DARK,
    commandLabel: 'Roam Theme: Mermaid Dark',
  },
  {
    themeKey: THEME_MERMAID_LIGHT,
    commandLabel: 'Roam Theme: Mermaid Light',
  },
  {
    themeKey: THEME_NIGHT_OWLISH,
    commandLabel: 'Roam Theme: Night Owlish',
  },
  {
    themeKey: THEME_RAILS_ORANGE,
    commandLabel: 'Roam Theme: Rails Orange',
  },
  {
    themeKey: THEME_RAILS_PURPLE,
    commandLabel: 'Roam Theme: Rails Purple',
  },
  {
    themeKey: THEME_TOKIWA,
    commandLabel: 'Roam Theme: Tokiwa',
  },
  {
    themeKey: THEME_ZENITHDECKER,
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



const switchRoamTheme = (newTheme: string) => {
  window.extensionAPI.settings.set(roamThemeSettingKey, newTheme).then(() => {
    updateTheme(newTheme)
  })
}

function onload({ extensionAPI }: OnloadArgs) {
  window.extensionAPI = extensionAPI
  loadSettings(extensionAPI, updateTheme)
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