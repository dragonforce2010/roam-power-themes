import { ConfigItem, ThemeConfig } from '../../theme-manager/theme-config';

const primaryColorItem: ConfigItem = {
  name: 'primary-color',
  label: 'Primary Color',
  render: 'color',
  valueType: 'color',
  value: '#ff8c00'
};

const backgroundColorItem: ConfigItem = {
  name: 'background-color',
  label: 'Background Color',
  render: 'color',
  valueType: 'color',
  value: '#1a1a1a'
};

const surfaceColorItem: ConfigItem = {
  name: 'surface-color',
  label: 'Surface Color',
  render: 'color',
  valueType: 'color',
  value: '#2d2d2d'
};

const textColorItem: ConfigItem = {
  name: 'text-color',
  label: 'Text Color',
  render: 'color',
  valueType: 'color',
  value: '#e0e0e0'
};

const accentColorItem: ConfigItem = {
  name: 'accent-color',
  label: 'Accent Color',
  render: 'color',
  valueType: 'color',
  value: '#ff8c00'
};

export const kortexConfig: ThemeConfig = {
  name: 'Kortex',
  label: 'Kortex',
  themeKey: 'kortex',
  commandLabel: 'Roam Theme: Kortex',
  configItems: [
    primaryColorItem,
    backgroundColorItem,
    surfaceColorItem,
    textColorItem,
    accentColorItem,
  ]
};

export const loadKortexConfig = () => {
  kortexConfig.configItems?.forEach((item: ConfigItem) => {
    const value = window.extensionAPI.settings.get(item.name)
    if (value && typeof value === 'string') {
      document.documentElement.style.setProperty(`--${item.name}`, value)
    }
  })
}

// Legacy exports for compatibility
export const kortexThemeSettings = kortexConfig.configItems
export const loadKortexThemeSettings = () => loadKortexConfig()
