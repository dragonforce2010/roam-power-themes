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
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F8xGPu4gkIw.png?alt=media&token=40becab2-caa5-4abd-a0d8-9ec87a70a90d'
    },
    {
      name: THEME_BEAR_PANIC,
      label: 'Bear Panic',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fwu0huc3JzK.png?alt=media&token=a96e986e-1642-4f2a-ba72-229fe5679075'
    },
    {
      name: THEME_BUBBLEGUM_DARK,
      label: 'Bubblegum Dark',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F3xElrm2Nsq.png?alt=media&token=4d36d96d-078c-4431-b5f6-7f365d330456'
    },
    {
      name: THEME_BUBBLEGUM_LIGHT,
      label: 'Bubblegum Light',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FxuaFKvayDK.png?alt=media&token=960f88cb-8b3b-4e84-8a11-dd0bbff8e1f0'
    },
    {
      name: THEME_CAESAR_LIGHT,
      label: 'Caesar Light',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FrsceGSXYzB.png?alt=media&token=dd630f1d-429d-4517-b4cb-6b0f516d43ae'
    },
    {
      name: THEME_DARKAGE,
      label: 'Darkage',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fv1wNnHLf_i.png?alt=media&token=6309f709-1e8a-4ac4-b245-898856447f6f'
    },
    {
      name: THEME_DRACULA,
      label: 'Dracula',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F_ALiT7BaL6.png?alt=media&token=be0ff15f-0916-4203-96f4-b2154b8c6308'
    },
    {
      name: THEME_FLOAT,
      label: 'Float',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fqzuqiy-8WV.png?alt=media&token=d011bc66-b603-401a-8627-5357e8bee45c'
    },
    {
      name: THEME_GAMBLER,
      label: 'Gambler',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FLEDx0a_pAi.png?alt=media&token=ac6b4849-b17e-45f1-a4e8-201f1f1464f6'
    },
    {
      name: THEME_HIPSTER1,
      label: 'Hipster 1',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fxh9JQbObf9.png?alt=media&token=0588bc9b-8317-4374-81bd-f4b55d97032c'
    },
    {
      name: THEME_HIPSTER2,
      label: 'Hipster 2',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FLk6j51h1xB.png?alt=media&token=b0932fb7-911b-458c-a551-978443f0c01b'
    },
    {
      name: THEME_LEYENDARKER,
      label: 'Leyenda Darker',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F3_HoYe1F0A.png?alt=media&token=94a64645-ff8e-4a0f-98e3-b11771027ea0'
    },
    {
      name: THEME_LILAC_DARK,
      label: 'Lilac Dark',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F_jn_M3IkQj.png?alt=media&token=acda7b0b-9b00-4604-af8c-9b72567e3194'
    },
    {
      name: THEME_LILAC_LIGHT,
      label: 'Lilac Light',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F7aUcG1mB6y.png?alt=media&token=43fc842d-fe8a-4917-a7a7-1c2ec1e18b0d'
    },
    {
      name: THEME_MAGAZINE,
      label: 'Magazine',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FGJRcpJjx4S.png?alt=media&token=6a1d33fe-99e0-4ef5-a7c2-79d60b72cee3'
    },
    {
      name: THEME_MERMAID_DARK,
      label: 'Mermaid Dark',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FIRNmesIqg7.png?alt=media&token=d87bb6ed-917a-49e2-8bf5-6285d8a0526d'
    },
    {
      name: THEME_MERMAID_LIGHT,
      label: 'Mermaid Light',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FqdoBYLPM-B.png?alt=media&token=ade5c972-56ba-42f7-bacf-bbabee7ade87'
    },
    {
      name: THEME_NIGHT_OWLISH,
      label: 'Night Owlish',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fy4qqFE18er.png?alt=media&token=64b5e072-c91b-4add-b710-454df481f1e2'
    },
    {
      name: THEME_RAILS_ORANGE,
      label: 'Rails Orange',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F0AefF5_goy.png?alt=media&token=3c874467-20f0-4cd6-86ae-6d2a7f9bbab7'
    },
    {
      name: THEME_RAILS_PURPLE,
      label: 'Rails Purple',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FVbunxswOKX.png?alt=media&token=9f8083e2-7a01-4221-8273-8db315ccc418'
    },
    {
      name: THEME_TOKIWA,
      label: 'Tokiwa',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F8t1InLIpTY.png?alt=media&token=f305c1f2-bbaf-4131-b3ec-37a9d4bc1f53'
    },
    {
      name: THEME_ZENITHDECKER,
      label: 'Zenithdecker',
      cover: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FVbkUDW66_x.png?alt=media&token=db91e8c5-646d-4522-98bd-a5ae7e26f4b5'
    }
  ],

  showThemeSettingPanel: () => set(() => ({
    isThemeSettingPanelOpen: true
  })),

  hideThemeSettingPanel: (callBackFun: any) => {
    set(() => ({
      isThemeSettingPanelOpen: false
    }))
    if (callBackFun)
      callBackFun()
  }
}))

export default useThemeStore