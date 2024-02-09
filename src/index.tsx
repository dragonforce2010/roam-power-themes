import { ExtensionAPI, OnloadArgs } from '../types'
import { initConfig } from './config/config'
import { roamThemeSettingKey } from './common/constants'
import { updateTheme, themeConfig } from './theme-manager/theme-manager'
import './styles/font-face.css'
import { initSidebar } from './sidebar/initSidebar'
import { initThemeListPanel } from './theme-panel/initThemeListPanel'
import UseDrawerState from './hooks/useDrawerState'
import { initToolBar } from './toolbar/initToolBar'
import ReactDOM from 'react-dom'
import { extension_helper } from './helper/extension-helper'
import { initThemeSettingPanel } from './theme-panel/initThemeSettingPanel'

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
    updateTheme(newTheme)
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