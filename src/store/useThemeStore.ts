import { create } from 'zustand'
import { loadAllThemes, loadCurrentTheme } from '../theme-manager/theme-loader'
import { ThemeConfig } from '../theme-manager/theme-config';
import { CURRENT_THEME_NAME } from '../common/constants';
import { removeOldTheme } from '../theme-manager/theme-manager-legacy';

const useThemeStore = create((set) => ({
  allThemes: loadAllThemes(),
  drawerPosition: 'right',
  isThemeListPanelOpen: false,
  isThemeSettingPannelOpen: false,
  isShowSidebarButton: true,
  isShowToolbarButton: true,
  currentTheme: {},
  themeMode: 'light',

  showThemeListPanel: () => set(() => ({
    isThemeListPanelOpen: true
  })),

  showThemeSettingPannel: () => set(() => ({
    isThemeSettingPannelOpen: true
  })),

  hideThemeListPanel: (callBackFun: any) => {
    set(() => ({
      isThemeListPanelOpen: false
    }))
    if (callBackFun)
      callBackFun()
  },

  hideThemeSettingPannel: () => {
    set(() => ({
      isThemeSettingPannelOpen: false
    }))
  },

  showSidebarButton: () => set(() => ({
    isShowSidebarButton: true
  })),

  hideSidebarButton: () => set(() => ({
    isShowSidebarButton: false
  })),

  showToolbarButton: () => set(() => ({
    isShowToolbarButton: true
  })),

  hideToolbarButton: () => set(() => ({
    isShowToolbarButton: false
  })),

  setCurrentTheme: (theme: ThemeConfig) => set((state: any) => {
    if (!theme || JSON.stringify(theme) == '{}') {
      return
    }

    // for lagacy themes to work
    removeOldTheme()

    window.extensionAPI.settings.set(CURRENT_THEME_NAME, theme.name)
    state.setAllThemes([
      ...(state.allThemes || [])?.filter((t: ThemeConfig) => t.name !== theme.name),
      theme
    ])

    return {
      currentTheme: theme,
    }
  }),

  setAllThemes: (themes: any) => set((state: any) => {
    console.log('set all themes called')
    return {
      allThemes: themes
    }
  }),

  setDrawerPosition: (position: 'top' | 'right' | 'bottom' | 'left') => set(() => ({
    drawerPosition: position
  })),

  setThemeMode: (themeMode: string) => set(() => {
    return {
      themeMode: themeMode
    }
  }),
}))

export default useThemeStore