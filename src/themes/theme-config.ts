import { create } from 'zustand';

export interface ConfigItem {
  name: string
  label: string
  render: string
  valueType: string
  value: string,
  // [key: string]: string
}

export interface Category {
  name: string
  label: string
  sections: Section[]
}

export interface Section {
  name: string
  label: string
  configItems: string[]
}

export interface ThemeConfig {
  name: string
  categories: Category[]
  configItems: ConfigItem[]
}

const bearPanic: ThemeConfig = {
  name: 'bearpanic',
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
      name: '--primary-color',
      label: 'Theme Primary Color',
      render: 'colorPickerRender',
      valueType: 'string',
      value: '#f9b637'
    }, {
      name: '--background-color',
      label: 'Background Color',
      render: 'colorPickerRender',
      valueType: 'string',
      value: '#f9b637'
    }, {
      name: '--h1-font-size',
      label: 'H1 Font Size',
      render: 'sliderRender',
      valueType: 'nubmer',
      value: '16'
    }, {
      name: '--h2-font-size',
      label: 'H2 Font Size',
      render: 'sliderRender',
      valueType: 'nubmer',
      value: '16'
    }, {
      name: '--h1-font-weight',
      label: 'H1 Font Weight',
      render: 'sliderRender',
      valueType: 'nubmer',
      value: '16',
    }
  ]
}

export {
  bearPanic
}