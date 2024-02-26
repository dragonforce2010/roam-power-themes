import { create } from 'zustand'
import { loadAllThemes } from '../theme-manager/theme-loader'


const useThemeStore = create((set) => ({
  allThemes: loadAllThemes(),
  drawerPosition: 'right',
  isThemeListPanelOpen: false,
  isThemeSettingPannelOpen: false,
  isShowSidebarButton: true,
  isShowToolbarButton: true,
  currentTheme: {},

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

  setCurrentTheme: (theme: any) => set(() => ({
    currentTheme: theme
  })),

  setDrawerPosition: (position: 'top' | 'right' | 'bottom' | 'left') => set(() => ({
    drawerPosition: position
  }))
}))

export default useThemeStore