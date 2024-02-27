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
              "--rm-alias--page-color",
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
              "--blockquote-background-color",
            ]
          },
          {
            "name": "headersFont",
            "label": "Header Font Colors",
            "configItems": [
              "--h1-font-color",
              "--h2-font-color",
              "--h3-font-color",
              "--h4-font-color",
              "--h5-font-color",
              "--h6-font-color"
            ]
          },
          {
            "name": "headersBackground",
            "label": "Header Background Colors",
            "configItems": [
              "--h1-background-color",
              "--h2-background-color",
              "--h3-background-color",
              "--h4-background-color",
              "--h5-background-color",
              "--h6-background-color"
            ]
          },
          {
            "name": "text",
            "label": "Text Colors",
            "configItems": [
              "--codeblock-color",
              "--right-sidebar-background",
              "--right-sidebar-outline-background",
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

        ]
      },
      {
        "name": "fontsize",
        "label": "Font Size Settings",
        "sections": [
          {
            "name": "headers",
            "label": "Header Font Sizes",
            "configItems": [
              "--page-title-font-size",
              "--h1-font-size",
              "--h2-font-size",
              "--h3-font-size",
              "--h4-font-size",
              "--h5-font-size",
              "--h6-font-size"
            ]
          },
          {
            "name": "base",
            "label": "Base Font Size",
            "configItems": [
              "--font-size"
            ]
          },
          {
            "name": "levels",
            "label": "Content Levels Font Sizes",
            "configItems": [
              "--level1-font-size",
              "--level2-font-size",
              "--level3-font-size",
              "--level4-font-size",
              "--level5-font-size",
              "--level6-font-size"
            ]
          }
        ]
      },
      {
        "name": "fontweight",
        "label": "Font Weight Settings",
        "sections": [
          {
            "name": "headers",
            "label": "Header Font Weights",
            "configItems": [
              "--page-title-font-weight",
              "--h1-font-weight",
              "--h2-font-weight",
              "--h3-font-weight",
              "--h4-font-weight",
              "--h5-font-weight",
              "--h6-font-weight"
            ]
          },
          {
            "name": "levels",
            "label": "Content Levels Font Weights",
            "configItems": [
              "--level1-font-weight",
              "--level2-font-weight",
              "--level3-font-weight",
              "--level4-font-weight",
              "--level5-font-weight",
              "--level6-font-weight"
            ]
          }
        ]
      },

    ],
    configItems: [
      {
        "name": "--font-size",
        "label": "Base Font Size",
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
        "name": "--rm-alias--page-color",
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
        "name": "--right-sidebar-color",
        "label": "Right Sidebar Text Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#92e749"
      },
      {
        "name": "--codeblock-color",
        "label": "Code Block Background Color",
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
        "value": 14,
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
        "value": 14,
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
        "value": 14,
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
        "value": 14,
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
        "value": 14,
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
        "value": 14,
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
        "value": 14,
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
        "value": 14,
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
      },
      {
        "name": "--level4-font-size",
        "label": "Level 4 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level4-font-color",
        "label": "Level 4 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level4-font-weight",
        "label": "Level 4 Font Weight",
        "render": "sliderRender",
        "valueType": "number",
        "value": 600,
        "minValue": 100,
        "maxValue": 900,
        "step": 100
      },
      {
        "name": "--level5-font-size",
        "label": "Level 5 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level5-font-color",
        "label": "Level 5 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level5-font-weight",
        "label": "Level 5 Font Weight",
        "render": "sliderRender",
        "valueType": "number",
        "value": 600,
        "minValue": 100,
        "maxValue": 900,
        "step": 100
      },
      {
        "name": "--level6-font-size",
        "label": "Level 6 Font Size",
        "render": "sliderRender",
        "valueType": "number",
        "value": 14,
        "minValue": 12,
        "maxValue": 96,
        "step": 1,
        "unit": "px"
      },
      {
        "name": "--level6-font-color",
        "label": "Level 6 Font Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--level6-font-weight",
        "label": "Level 6 Font Weight",
        "render": "sliderRender",
        "valueType": "number",
        "value": 600,
        "minValue": 100,
        "maxValue": 900,
        "step": 100
      },
      {
        "name": "--page-title-background-color",
        "label": "Page Title Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h1-background-color",
        "label": "H1 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h2-background-color",
        "label": "H2 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h3-background-color",
        "label": "H3 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h4-background-color",
        "label": "H4 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h5-background-color",
        "label": "H5 Background Color",
        "render": "colorPickerRender",
        "valueType": "string",
        "value": "#f9b637"
      },
      {
        "name": "--h6-background-color",
        "label": "H6 Background Color",
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