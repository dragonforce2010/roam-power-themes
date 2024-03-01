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


const initTheme = () => {
  document.body.classList.add('roam-power-theme')
}

const loadAndApplyThemeStyleProperties = (themeConfig: ThemeConfig) => {
  for (let item of themeConfig?.configItems) {
    let styleValue = window.extensionAPI.settings.get([ROAM_POWER_THEME_NAMESPACE, themeConfig.name, item.name].join('-'))
    const propetyValue = styleValue ?? (item.unit && item.value ? (item.value + item.unit) : item.value)
    findStyleRuleWithCallBack('.' + ROAM_POWER_THEME_NAMESPACE, (rule: CSSStyleRule) => rule.style.setProperty(item.name, propetyValue))
    item.value = styleValue ?? item.value
    item.value = (item.value || '').toString().replace(item.unit, '');
  }
  return themeConfig
}

const combineThemeStyleProperties = (themeConfig: ThemeConfig) => {
  if (!themeConfig || !themeConfig.configItems)
    return themeConfig

  for (let item of themeConfig.configItems) {
    let styleValue = window.extensionAPI.settings.get([ROAM_POWER_THEME_NAMESPACE, themeConfig.name, item.name].join('-'))
    if (styleValue) {
      console.log('TestLog: ~ combineThemeStyleProperties ~ styleValue exists:', styleValue)
    }
    item.value = styleValue ?? item.value
  }
  // console.log('TestLog: ~ combineThemeStyleProperties ~ themeConfig after:', themeConfig)
  return themeConfig
}

const updateThemeStyleProperty = (themeConfig: ThemeConfig, item: ConfigItem, value: string) => {
  findStyleRuleWithCallBack('.' + ROAM_POWER_THEME_NAMESPACE, (rule: CSSStyleRule) => rule.style.setProperty(item.name, value))
  window.extensionAPI.settings.set([ROAM_POWER_THEME_NAMESPACE, themeConfig.name, item.name].join('-'), value)
}

const transformCurrentThemeData = (theme: ThemeConfig) => {
  const themeConfigData = {
    name: theme.name,
    label: theme.label,
    type: theme.type,
    coverUrl: theme.coverUrl,
    commandLabel: theme.commandLabel,
    configItems: {}
  }
  const configItems: { [key: string]: any } = {}
  for (let item of theme.configItems || []) {
    configItems[item.name] = item.value
  }
  themeConfigData.configItems = configItems

  // console.log(themeConfigData)
  return themeConfigData
}


export {
  initTheme,
  loadAndApplyThemeStyleProperties,
  updateThemeStyleProperty,
  combineThemeStyleProperties,
  transformCurrentThemeData
}