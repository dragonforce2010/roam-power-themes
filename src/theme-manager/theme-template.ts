import { ThemeConfig } from './theme-config'

const getThemeTemplateWithDefaultConfigValue: () => ThemeConfig = () => {
  return {
    name: 'defaultThemeName',
    label: 'xxx',
    coverUrl: 'https://theme-preview-img-xxxx.url',
    type: 'dark',
    commandLabel: 'Roam Theme: xxx',
    "categories": [
      {
        "name": "colors",
        "label": "Color Settings",
        "sections": [
          {
            "name": "primary",
            "label": "Primary Colors",
            "configItems": [
              "--primary-color",
              "--page-title-font-color",
              "--link-color",
              "--page-ref-link-color",
            ]
          },
          {
            "name": "text",
            "label": "Text Colors",
            "configItems": [
              "--main-article-text-color",
              "--left-sidebar-top-font-color",
              "--right-sidebar-text-color",
              "--right-sidebar-page-title-font-color",
            ]
          },
          {
            "name": "background",
            "label": "Background Colors",
            "configItems": [
              "--rm-left-sidebar-toprow-background-color",
              "--rm-topbar-background-color",
              "--rm-right-sidebar-toprow-background-color",
              "--rm-top-search-box-background-color",
              "--page-title-background-color",
              "--left-sidebar-background-color",
              "--reference-bg",
              "--active-line-bg",
              "--roam-body-background",
              "--roam-article-background",
              "--left-sidebar-onhover-background",
              "--right-sidebar-background",
              "--right-sidebar-outline-background",
              "--blockquote-background-color",
              "--codeblock-color",
              "--rm-embed-container-background-color",
              "--rm-page-ref--tag-background-color",
            ]
          },
          {
            "name": "headersFont",
            "label": "Header Font Colors",
            "configItems": [
              "--h1-font-color",
              "--h2-font-color",
              "--h3-font-color",
            ]
          },
          {
            "name": "headersBackground",
            "label": "Header Background Colors",
            "configItems": [
              "--h1-background-color",
              "--h2-background-color",
              "--h3-background-color",
            ]
          },
          {
            "name": "levelsFont",
            "label": "Content Levels Font Colors",
            "configItems": [
              "--level1-font-color",
              "--level2-font-color",
              "--level3-font-color",
              "--level4-font-color",
              "--level5-font-color",
              "--level6-font-color"
            ]
          },
          {
            "name": "levelsBackground",
            "label": "Content Levels Background Colors",
            "configItems": [
              "--level1-background-color",
              "--level2-background-color",
              "--level3-background-color",
              "--level4-background-color",
              "--level5-background-color",
              "--level6-background-color"
            ]
          },
          {
            "name": "border-color",
            "label": "Border Colors",
            "configItems": [
              "--sidebar-right-border-color",
              "--rm-left-sidebar-toprow-border-color",
              "--rm-topbar-border-color",
              "--rm-top-search-box-border-color",
              "--rm-right-sidebar-toprow-border-color",
              "--reference-border",
              "--rm-embed-container-border-color",
            ]
          },
          {
            "name": "highlight",
            "label": "Highlight Colors",
            "configItems": [
              "--highlight-color",
            ]
          },
        ]
      },
      {
        "name": "fontsize",
        "label": "Font Size Settings",
        "sections": [
          {
            "name": "title-fontsize",
            "label": "Title Font Size",
            "configItems": [
              "--page-title-font-size",
            ]
          },
          {
            "name": "heading-fontsize",
            "label": "Heading Font Size",
            "configItems": [
              "--h1-font-size",
              "--h2-font-size",
              "--h3-font-size",
            ]
          },
          {
            "name": "content-fontsize",
            "label": "Sidebar Font Size",
            "configItems": [
              "--left-sidebar-font-size",
              "--roam-main-font-size",
              "--right-sidebar-font-size",
            ]
          },
          {
            "name": "level-fontsize",
            "label": "Content Level Font Size",
            "configItems": [
              "--level1-font-size",
              "--level2-font-size",
              "--level3-font-size",
              "--level4-font-size",
              "--level5-font-size",
              "--level6-font-size",
            ]
          },
        ]
      },
      {
        "name": "fontweight",
        "label": "Font Weight Settings",
        "sections": [
          {
            "name": "title",
            "label": "Title Font Weights",
            "configItems": [
              "--page-title-font-weight",
            ]
          },
        ]
      },

    ],
    configItems: [
      {
        "name": "--left-sidebar-font-size",
        "label": "Left Sidebar Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--roam-main-font-size",
        "label": "Roam Main Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--right-sidebar-font-size",
        "label": "Right Sidebar Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
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
        "name": "--h1-font-color",
        "label": "H1 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h2-font-color",
        "label": "H2 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h3-font-color",
        "label": "H3 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--rm-left-sidebar-toprow-background-color",
        "label": "Left Sidebar TopRow Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--left-sidebar-top-font-color",
        "label": "Left Sidebar Top Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--rm-right-sidebar-toprow-background-color",
        "label": "Right Sidebar TopRow Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--rm-topbar-background-color",
        "label": "Topbar Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--rm-embed-container-background-color",
        "label": "Roam Embeded Block Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--rm-page-ref--tag-background-color",
        "label": "Page Ref Tag Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--h1-background-color",
        "label": "H1 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--h2-background-color",
        "label": "H2 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--h3-background-color",
        "label": "H3 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--level1-font-color",
        "label": "Level 1 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level2-font-color",
        "label": "Level 2 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level3-font-color",
        "label": "Level 3 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level4-font-color",
        "label": "Level 4 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level5-font-color",
        "label": "Level 5 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level6-font-color",
        "label": "Level 6 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level1-background-color",
        "label": "Level 1 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--level2-background-color",
        "label": "Level 2 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--level3-background-color",
        "label": "Level 3 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--main-article-text-color",
        "label": "Article Text Primary Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--right-sidebar-text-color",
        "label": "Right Sidebar Text Primary Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--right-sidebar-page-title-font-color",
        "label": "Right Sidebar Page Title Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--roam-body-background",
        "label": "Roam Body Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#faf9f6"
      },
      {
        "name": "--roam-article-background",
        "label": "Roam Article Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#fbfaf9"
      },
      {
        "name": "--left-sidebar-onhover-background",
        "label": "Left Sidebar onHover Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#ddb388"
      },
      {
        "name": "--blockquote-background-color",
        "label": "Block Quote Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#ddb388"
      },
      {
        "name": "--page-ref-link-color",
        "label": "Roam Aias Page Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#fbfaf9"
      },
      {
        "name": "--sidebar-right-border-color",
        "label": "Left Sidebar Right Border Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--rm-topbar-border-color",
        "label": "Roam Topbar Border Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--rm-left-sidebar-toprow-border-color",
        "label": "Left Sidebar Top Border Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--rm-right-sidebar-toprow-border-color",
        "label": "Right Sidebar Top Border Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#090b10"
      },
      {
        "name": "--sidebar-right-border-color",
        "label": "Right Sidebar Top Border Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--rm-top-search-box-border-color",
        "label": "Roam Top Search Border Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--rm-top-search-box-background-color",
        "label": "Roam Top Search Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "none"
      },
      {
        "name": "--left-sidebar-background-color",
        "label": "Left Sidebar Background Color",
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
        "name": "--rm-embed-container-border-colorr",
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
        "name": "--right-sidebar-background",
        "label": "Right Sidebar Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#53c1dc"
      },
      {
        "name": "--right-sidebar-outline-background",
        "label": "Right Sidebar Outline Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#53c1dc"
      },
      {
        "name": "--codeblock-color",
        "label": "Code Block Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f6f7ee"
      },
      {
        "name": "--right-sidebar-color",
        "label": "Right Sidebar Text Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f6f7ee"
      },
      {
        "name": "--page-ref-link-color",
        "label": "Page Ref Link Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#53c1dc"
      },
      {
        "name": "--active-line-bg",
        "label": "Active Line Background",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#0d2030"
      },
      {
        "name": "--page-title-font-size",
        "label": "Page Title Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 40,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--h1-font-size",
        "label": "Heading1 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 24,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--h2-font-size",
        "label": "Heading2 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 22,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--h3-font-size",
        "label": "Heading3 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 20,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level1-font-size",
        "label": "Content Level1 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 16,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level2-font-size",
        "label": "Content Level2 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 15,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level3-font-size",
        "label": "Content Level3 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level4-font-size",
        "label": "Content Level4 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 13,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level5-font-size",
        "label": "Content Level5 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 12,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level6-font-size",
        "label": "Content Level6 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 12,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--page-title-font-color",
        "label": "Page Title Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--page-title-font-weight",
        "label": "Page Title Font Weight",
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
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--page-title-background-color",
        "label": "Page Title Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level1-background-color",
        "label": "Level 1 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level2-background-color",
        "label": "Level 2 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level3-background-color",
        "label": "Level 3 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level4-background-color",
        "label": "Level 4 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level5-background-color",
        "label": "Level 5 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level6-background-color",
        "label": "Level 6 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      }
    ]
  }
}

export default getThemeTemplateWithDefaultConfigValue