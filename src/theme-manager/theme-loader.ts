import { ConfigItem, ThemeConfig } from './theme-config'
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

const loadAllThemes = (): ThemeConfig[] => {

  console.log('TestLog: ~ loadAllThemes ~ loadAllThemes:', loadAllThemes)

  let allThemeConigFromTemplate: ThemeConfig[] = [
    {
      name: THEME_BEAR_PANIC,
      label: 'Bear Panic',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fwu0huc3JzK.png?alt=media&token=a96e986e-1642-4f2a-ba72-229fe5679075',
      type: 'dark',
      commandLabel: 'Roam Theme: Bear Panic',
      categories: [
        {
          name: 'color',
          label: 'Color Settings',
          sections: [
            {
              name: 'fontColors',
              label: 'Font Color Settings',
              configItems: ['--primary-color']
            },
            {
              name: 'backgroundColors',
              label: 'Background Color Settings',
              configItems: ['--background-color']
            },
          ],
        }, {
          name: 'font',
          label: 'font Settings',
          sections: [
            {
              name: 'Header Font Size Settings',
              label: 'Header Font Size Settings',
              configItems: ['--h1-font-size', '--h1-font-weight', '--h2-font-size']
            },
            {
              name: 'Article Font Settings',
              label: 'Article Font Settings',
              configItems: ['config1', 'config2']
            },
          ]
        }
      ],
      configItems: [
        {
          "name": "--font-size",
          "label": "Base Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 16,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--primary-color",
          "label": "Primary Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--background-color",
          "label": "Background Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#111c2a"
        },
        {
          "name": "--border-color",
          "label": "Border Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#090b10"
        },
        {
          "name": "--text-color",
          "label": "Text Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f6f7ed"
        },
        {
          "name": "--sidebar-color",
          "label": "Sidebar Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#090b10"
        },
        {
          "name": "--highlight-color",
          "label": "Highlight Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#6f4ebb"
        },
        {
          "name": "--brackets-color",
          "label": "Brackets Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#8e743d"
        },
        {
          "name": "--highlight-blue",
          "label": "Highlight Blue",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#1c2e3e"
        },
        {
          "name": "--reference-bg",
          "label": "Reference Background",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#172133"
        },
        {
          "name": "--reference-border",
          "label": "Reference Border",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#1e3745"
        },
        {
          "name": "--link-color",
          "label": "Link Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#53c1dc"
        },
        {
          "name": "--code-color",
          "label": "Code Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f6f7ee"
        },
        {
          "name": "--gutter-bg",
          "label": "Gutter Background",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#091722"
        },
        {
          "name": "--line-color",
          "label": "Line Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#a0a2b6"
        },
        {
          "name": "--active-line-bg",
          "label": "Active Line Background",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#0d2030"
        },
        {
          "name": "--keyword-color",
          "label": "Keyword Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#5393a2"
        },
        {
          "name": "--h1-font-size",
          "label": "H1 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h1-font-color",
          "label": "H1 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--h1-font-weight",
          "label": "H1 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        // Following the same pattern for H2-H6
        {
          "name": "--h2-font-size",
          "label": "H2 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h2-font-color",
          "label": "H2 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--h2-font-weight",
          "label": "H2 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        {
          "name": "--h3-font-size",
          "label": "H3 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h3-font-color",
          "label": "H3 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--h3-font-weight",
          "label": "H3 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        {
          "name": "--h4-font-size",
          "label": "H4 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h4-font-color",
          "label": "H4 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--h4-font-weight",
          "label": "H4 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        {
          "name": "--h5-font-size",
          "label": "H5 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h5-font-color",
          "label": "H5 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--h5-font-weight",
          "label": "H5 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        {
          "name": "--h6-font-size",
          "label": "H6 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h6-font-color",
          "label": "H6 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--h6-font-weight",
          "label": "H6 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        {
          "name": "--level1-font-size",
          "label": "Level 1 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--level1-font-color",
          "label": "Level 1 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--level1-font-weight",
          "label": "Level 1 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        {
          "name": "--level2-font-size",
          "label": "Level 2 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 18,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--level2-font-color",
          "label": "Level 2 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--level2-font-weight",
          "label": "Level 2 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 700,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        },
        {
          "name": "--level3-font-size",
          "label": "Level 3 Font Size",
          "render": "sliderRender",
          "valueType": "number",
          "value": 16,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--level3-font-color",
          "label": "Level 3 Font Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f9b637"
        },
        {
          "name": "--level3-font-weight",
          "label": "Level 3 Font Weight",
          "render": "sliderRender",
          "valueType": "number",
          "value": 600,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        }e
      ]
    },
    {
      name: THEME_BEAR_PANIC + '测试对比',
      label: 'Bear Panic 2',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fwu0huc3JzK.png?alt=media&token=a96e986e-1642-4f2a-ba72-229fe5679075',
      type: 'dark',
      commandLabel: 'Roam Theme: Bear Panic',
      categories: [
        {
          name: 'color',
          label: 'Color Settings',
          sections: [
            {
              name: 'fontColors',
              label: 'Font Color Settings',
              configItems: ['--primary-color']
            },
            {
              name: 'backgroundColors',
              label: 'Background Color Settings',
              configItems: ['--background-color']
            },
          ],
        }, {
          name: 'font',
          label: 'font Settings',
          sections: [
            {
              name: 'Header Font Size Settings',
              label: 'Header Font Size Settings',
              configItems: ['--h1-font-size', '--h1-font-weight', '--h2-font-size']
            },
            {
              name: 'Article Font Settings',
              label: 'Article Font Settings',
              configItems: ['config1', 'config2']
            },
          ]
        }
      ],
      configItems: [
        {
          "name": "--primary-color",
          "label": "Theme Primary Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#37c2f9"
        },
        {
          "name": "--background-color",
          "label": "Background Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#3f1086"
        },
        {
          "name": "--border-color",
          "label": "Border Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#090b10"
        },
        {
          "name": "--text-color",
          "label": "Text Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f6f7ed"
        },
        {
          "name": "--sidebar-color",
          "label": "Sidebar Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#090b10"
        },
        {
          "name": "--highlight-color",
          "label": "Highlight Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#6f4ebb"
        },
        {
          "name": "--brackets-color",
          "label": "Brackets Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#8e743d"
        },
        {
          "name": "--highlight-blue",
          "label": "Highlight Blue",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#1c2e3e"
        },
        {
          "name": "--reference-bg",
          "label": "Reference Background",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#172133"
        },
        {
          "name": "--reference-border",
          "label": "Reference Border",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#1e3745"
        },
        {
          "name": "--link-color",
          "label": "Link Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#53c1dc"
        },
        {
          "name": "--code-color",
          "label": "Code Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#f6f7ee"
        },
        {
          "name": "--gutter-bg",
          "label": "Gutter Background",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#091722"
        },
        {
          "name": "--line-color",
          "label": "Line Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#a0a2b6"
        },
        {
          "name": "--active-line-bg",
          "label": "Active Line Background",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#0d2030"
        },
        {
          "name": "--keyword-color",
          "label": "Keyword Color",
          "render": "colorPickerRender",
          "valueType": "string",
          "value": "#5393a2"
        },
        {
          "name": "--h1-font-size",
          "label": "H1 Font Size",
          "render": "sliderRender",
          "valueType": "nubmer",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h2-font-size",
          "label": "H2 Font Size",
          "render": "sliderRender",
          "valueType": "nubmer",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h3-font-size",
          "label": "H3 Font Size",
          "render": "sliderRender",
          "valueType": "nubmer",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h4-font-size",
          "label": "H4 Font Size",
          "render": "sliderRender",
          "valueType": "nubmer",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h5-font-size",
          "label": "H5 Font Size",
          "render": "sliderRender",
          "valueType": "nubmer",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h6-font-size",
          "label": "H6 Font Size",
          "render": "sliderRender",
          "valueType": "nubmer",
          "value": 20,
          "minValue": 12,
          "maxValue": 96,
          "step": 1,
          "unit": "px"
        },
        {
          "name": "--h1-font-weight",
          "label": "H1 Font Weight",
          "render": "sliderRender",
          "valueType": "nubmer",
          "value": 800,
          "minValue": 100,
          "maxValue": 900,
          "step": 100
        }
      ]
    },
    {
      name: THEME_BEAR_GOTHAM,
      label: 'Bear Gotham',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F8xGPu4gkIw.png?alt=media&token=40becab2-caa5-4abd-a0d8-9ec87a70a90d'
    },
    {
      name: THEME_BUBBLEGUM_DARK,
      label: 'Bubblegum Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F3xElrm2Nsq.png?alt=media&token=4d36d96d-078c-4431-b5f6-7f365d330456'
    },
    {
      name: THEME_BUBBLEGUM_LIGHT,
      label: 'Bubblegum Light',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FxuaFKvayDK.png?alt=media&token=960f88cb-8b3b-4e84-8a11-dd0bbff8e1f0'
    },
    {
      name: THEME_CAESAR_LIGHT,
      label: 'Caesar Light',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FrsceGSXYzB.png?alt=media&token=dd630f1d-429d-4517-b4cb-6b0f516d43ae'
    },
    {
      name: THEME_DARKAGE,
      label: 'Darkage',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fv1wNnHLf_i.png?alt=media&token=6309f709-1e8a-4ac4-b245-898856447f6f'
    },
    {
      name: THEME_DRACULA,
      label: 'Dracula Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F_ALiT7BaL6.png?alt=media&token=be0ff15f-0916-4203-96f4-b2154b8c6308'
    },
    {
      name: THEME_FLOAT,
      label: 'Float',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fqzuqiy-8WV.png?alt=media&token=d011bc66-b603-401a-8627-5357e8bee45c'
    },
    {
      name: THEME_GAMBLER,
      label: 'Gambler Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FLEDx0a_pAi.png?alt=media&token=ac6b4849-b17e-45f1-a4e8-201f1f1464f6'
    },
    {
      name: THEME_HIPSTER1,
      label: 'Hipster 1',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fxh9JQbObf9.png?alt=media&token=0588bc9b-8317-4374-81bd-f4b55d97032c'
    },
    {
      name: THEME_HIPSTER2,
      label: 'Hipster 2',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FLk6j51h1xB.png?alt=media&token=b0932fb7-911b-458c-a551-978443f0c01b'
    },
    {
      name: THEME_LEYENDARKER,
      label: 'Leyenda Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F3_HoYe1F0A.png?alt=media&token=94a64645-ff8e-4a0f-98e3-b11771027ea0'
    },
    {
      name: THEME_LILAC_DARK,
      label: 'Lilac Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F_jn_M3IkQj.png?alt=media&token=acda7b0b-9b00-4604-af8c-9b72567e3194'
    },
    {
      name: THEME_LILAC_LIGHT,
      label: 'Lilac Light',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F7aUcG1mB6y.png?alt=media&token=43fc842d-fe8a-4917-a7a7-1c2ec1e18b0d'
    },
    {
      name: THEME_MAGAZINE,
      label: 'Magazine',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FGJRcpJjx4S.png?alt=media&token=6a1d33fe-99e0-4ef5-a7c2-79d60b72cee3'
    },
    {
      name: THEME_MERMAID_DARK,
      label: 'Mermaid Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FIRNmesIqg7.png?alt=media&token=d87bb6ed-917a-49e2-8bf5-6285d8a0526d'
    },
    {
      name: THEME_MERMAID_LIGHT,
      label: 'Mermaid Light',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FqdoBYLPM-B.png?alt=media&token=ade5c972-56ba-42f7-bacf-bbabee7ade87'
    },
    {
      name: THEME_NIGHT_OWLISH,
      label: 'Night Owlish Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2Fy4qqFE18er.png?alt=media&token=64b5e072-c91b-4add-b710-454df481f1e2'
    },
    {
      name: THEME_RAILS_ORANGE,
      label: 'Rails Orange Dark',
      type: 'dark',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F0AefF5_goy.png?alt=media&token=3c874467-20f0-4cd6-86ae-6d2a7f9bbab7'
    },
    {
      name: THEME_RAILS_PURPLE,
      label: 'Rails Purple',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FVbunxswOKX.png?alt=media&token=9f8083e2-7a01-4221-8273-8db315ccc418'
    },
    {
      name: THEME_TOKIWA,
      label: 'Tokiwa',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F8t1InLIpTY.png?alt=media&token=f305c1f2-bbaf-4131-b3ec-37a9d4bc1f53'
    },
    {
      name: THEME_ZENITHDECKER,
      label: 'Zenithdecker',
      type: 'light',
      coverUrl: 'https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FVbkUDW66_x.png?alt=media&token=db91e8c5-646d-4522-98bd-a5ae7e26f4b5'
    }
  ]

  return allThemeConigFromTemplate
}

export {
  loadAllThemes
}