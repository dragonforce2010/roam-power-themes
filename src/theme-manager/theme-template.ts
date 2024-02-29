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
              "--main-article-text-color",
              "--right-sidebar-text-color",
            ]
          },
          {
            "name": "background",
            "label": "Background Colors",
            "configItems": [
              "--page-title-background-color",
              "--sidebar-color",
              "--reference-bg",
              "--active-line-bg",
              "--roam-body-background",
              "--roam-article-background",
              "--left-sidebar-onhover-background",
              "--right-sidebar-background",
              "--right-sidebar-outline-background",
              "--blockquote-background-color",
              "--codeblock-color",
            ]
          },
          {
            "name": "text",
            "label": "Text Colors",
            "configItems": [
              "--right-sidebar-color",
            ]
          },
          {
            "name": "border-color",
            "label": "Border Colors",
            "configItems": [
              "--sidebar-right-border-color",
              "--reference-border"
            ]
          },
          {
            "name": "highlight",
            "label": "Highlight Colors",
            "configItems": [
              "--highlight-color",
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
            "name": "content-fontsize",
            "label": "Sidebar Font Size",
            "configItems": [
              "--left-sidebar-font-size",
              "--roam-main-font-size",
              "--right-sidebar-font-size",
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
        "label": "Sidebar Right Border Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#090b10"
      },
      {
        "name": "--sidebar-color",
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
        "name": "--h1-font-size",
        "label": "H1 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
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