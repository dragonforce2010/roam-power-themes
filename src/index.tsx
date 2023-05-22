import { ExtensionAPI, OnloadArgs } from '../types'
import { initConfig } from './config'
import { roamThemeSettingKey } from './constants'
import { updateTheme, themeConfig } from './theme-manager'

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