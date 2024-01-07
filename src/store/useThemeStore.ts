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
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F3_HoYe1F0A.png?alt=media&token=94a64645-ff8e-4a0f-98e3-b11771027ea0'
    },
    {
      name: THEME_BEAR_PANIC,
      label: 'Bear Panic',
      cover: ''
    },
    {
      name: THEME_BUBBLEGUM_DARK,
      label: 'Bubblegum Dark',
      cover: ''
    },
    {
      name: THEME_BUBBLEGUM_LIGHT,
      label: 'Bubblegum Light',
      cover: ''
    },
    {
      name: THEME_CAESAR_LIGHT,
      label: 'Caesar Light',
      cover: ''
    },
    {
      name: THEME_DARKAGE,
      label: 'Darkage',
      cover: ''
    },
    {
      name: THEME_DRACULA,
      label: 'Dracula',
      cover: ''
    },
    {
      name: THEME_FLOAT,
      label: 'Float',
      cover: ''
    },
    {
      name: THEME_GAMBLER,
      label: 'Gambler',
      cover: ''
    },
    {
      name: THEME_HIPSTER1,
      label: 'Hipster 1',
      cover: ''
    },
    {
      name: THEME_HIPSTER2,
      label: 'Hipster 2',
      cover: ''
    },
    {
      name: THEME_LEYENDARKER,
      label: 'Leyenda Darker',
      cover: ''
    },
    {
      name: THEME_LILAC_DARK,
      label: 'Lilac Dark',
      cover: ''
    },
    {
      name: THEME_LILAC_LIGHT,
      label: 'Lilac Light',
      cover: ''
    },
    {
      name: THEME_MAGAZINE,
      label: 'Magazine',
      cover: ''
    },
    {
      name: THEME_MERMAID_DARK,
      label: 'Mermaid Dark',
      cover: ''
    },
    {
      name: THEME_MERMAID_LIGHT,
      label: 'Mermaid Light',
      cover: ''
    },
    {
      name: THEME_NIGHT_OWLISH,
      label: 'Night Owlish',
      cover: ''
    },
    {
      name: THEME_RAILS_ORANGE,
      label: 'Rails Orange',
      cover: ''
    },
    {
      name: THEME_RAILS_PURPLE,
      label: 'Rails Purple',
      cover: ''
    },
    {
      name: THEME_TOKIWA,
      label: 'Tokiwa',
      cover: ''
    },
    {
      name: THEME_ZENITHDECKER,
      label: 'Zenith Decker',
      cover: ''
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