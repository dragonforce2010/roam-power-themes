import { create } from 'zustand'
import {
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
} from '../common/constants';

const useThemeStore = create((set) => ({
  isThemeSettingPanelOpen: true,
  allThemes: [
    {
      name: THEME_BEAR_GOTHAM,
      label: 'Bear Gotham',
      previewPic: ''
    },
    {
      name: THEME_BEAR_PANIC,
      label: 'Bear Panic',
      previewPic: ''
    },
    {
      name: THEME_BUBBLEGUM_DARK,
      label: 'Bubblegum Dark',
      previewPic: ''
    },
    {
      name: THEME_BUBBLEGUM_LIGHT,
      label: 'Bubblegum Light',
      previewPic: ''
    },
    {
      name: THEME_CAESAR_LIGHT,
      label: 'Caesar Light',
      previewPic: ''
    },
    {
      name: THEME_DARKAGE,
      label: 'Darkage',
      previewPic: ''
    },
    {
      name: THEME_DRACULA,
      label: 'Dracula',
      previewPic: ''
    },
    {
      name: THEME_FLOAT,
      label: 'Float',
      previewPic: ''
    },
    {
      name: THEME_GAMBLER,
      label: 'Gambler',
      previewPic: ''
    },
    {
      name: THEME_HIPSTER1,
      label: 'Hipster 1',
      previewPic: ''
    },
    {
      name: THEME_HIPSTER2,
      label: 'Hipster 2',
      previewPic: ''
    },
    {
      name: THEME_LEYENDARKER,
      label: 'Leyenda Darker',
      previewPic: ''
    },
    {
      name: THEME_LILAC_DARK,
      label: 'Lilac Dark',
      previewPic: ''
    },
    {
      name: THEME_LILAC_LIGHT,
      label: 'Lilac Light',
      previewPic: ''
    },
    {
      name: THEME_MAGAZINE,
      label: 'Magazine',
      previewPic: ''
    },
    {
      name: THEME_MERMAID_DARK,
      label: 'Mermaid Dark',
      previewPic: ''
    },
    {
      name: THEME_MERMAID_LIGHT,
      label: 'Mermaid Light',
      previewPic: ''
    },
    {
      name: THEME_NIGHT_OWLISH,
      label: 'Night Owlish',
      previewPic: ''
    },
    {
      name: THEME_RAILS_ORANGE,
      label: 'Rails Orange',
      previewPic: ''
    },
    {
      name: THEME_RAILS_PURPLE,
      label: 'Rails Purple',
      previewPic: ''
    },
    {
      name: THEME_TOKIWA,
      label: 'Tokiwa',
      previewPic: ''
    },
    {
      name: THEME_ZENITHDECKER,
      label: 'Zenith Decker',
      previewPic: ''
    }
  ],

  showThemeSettingPanel: () => set(() => ({
    isThemeSettingPanelOpen: true
  })),

  hideThemeSettingPanel: () => set(() => ({
    isThemeSettingPanelOpen: false
  }))
}))

export default useThemeStore