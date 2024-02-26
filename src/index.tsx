import { OnloadArgs } from '../types'
import { roamThemeSettingKey } from './common/constants'
import { initConfig } from './config/config'
import { extension_helper } from './helper/extension-helper'
import { initSidebar } from './sidebar/initSidebar'
import './styles/font-face.css'
import { themeConfig } from './theme-manager/theme-manager'
import { initThemeListPanel } from './theme-panel/initThemeListPanel'
import { initThemeSettingPanel } from './theme-panel/initThemeSettingPanel'
import './themes/theme.css'
import { initToolBar } from './toolbar/initToolBar'

const themConfigKey = 'themConfig'
let interval: NodeJS.Timer
let currentTheme = ""
let prevTheme = ""

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
    // updateTheme(newTheme)
  })
}

function onload({ extensionAPI }: OnloadArgs) {
  window.extensionAPI = extensionAPI
  initConfig()
  registeThemeCommands()
  initSidebar()
  initToolBar()
  initThemeListPanel()
  initThemeSettingPanel()
}

function onunload() {
  removeThemeCommands()
  document.body.classList.remove(currentTheme)
  clearInterval(interval)

  extension_helper.uninstall();
}

export default {
  onload: onload,
  onunload: onunload,
}