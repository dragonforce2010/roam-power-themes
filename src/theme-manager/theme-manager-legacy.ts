import '../themes/bearpanic/bearpanic.css'
import '../themes/bubblegum/bubblegum-dark.css'
import '../themes/bubblegum/bubblegum-light.css'
import '../themes/caesar/caesar-light.css'
import '../themes/darkage/darkage.css'
import '../themes/dracula/dracula.css'
import '../themes/float/float.css'
import '../themes/gambler/gambler.css'
import '../themes/gotham/gotham.css'
import '../themes/hipster/hipster1.css'
import '../themes/hipster/hipster2.css'
import '../themes/leyendarker/leyendarker.css'
import '../themes/leyendecker/leyendecker.css'
import '../themes/lilac/lilac-dark.css'
import '../themes/lilac/lilac-light.css'
import '../themes/magazine/magazine.css'
import '../themes/mermaid/mermaid-dark.css'
import '../themes/mermaid/mermaid-light.css'
import '../themes/night-owl/night-owl.css'
import '../themes/rails/rails-purple.css'
import '../themes/rails/rails.css'
import '../themes/tokiwa/tokiwa.css'
import '../themes/zenithdecker/zenithdecker.css'

import {
  ROAM_POWER_THEME_NAMESPACE,
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
  THEME_LEYENDECKER,
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
  roamThemeSettingKey
} from '../common/constants'
import { ConfigItem, ThemeConfig } from './theme-config';
import { findStyleRuleWithCallBack } from '../utils/configUtil'


let currentTheme = ""
let prevTheme = ""


// for old themes, will deprecate in some time later
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


// for old themes, will deprecate in some time later
const getCurrentTheme = () => {
  return window.extensionAPI.settings.get(roamThemeSettingKey) as string
}


// for old themes, will deprecate in some time later
const updateTheme = (newTheme: string) => {
  // make sure that the new theme is offloaded before update the legacy theme
  document.body.classList.remove('roam-power-theme')

  prevTheme = currentTheme
  currentTheme = newTheme
  if (prevTheme) document.body.classList.remove(prevTheme)
  if (currentTheme) document.body.classList.add(currentTheme)
}

const removeOldTheme = () => {
  if (currentTheme) document.body.classList.remove(currentTheme)
}


export {
  themeConfig,
  getCurrentTheme,
  updateTheme,
  removeOldTheme
}