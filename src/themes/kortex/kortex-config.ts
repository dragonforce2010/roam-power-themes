import { ConfigItem, ThemeConfig } from '../../theme-manager/theme-config';

export const kortexConfig: ThemeConfig = {
  name: 'Kortex',
  label: 'Kortex',
  type: 'dark',
  commandLabel: 'Roam Theme: Kortex',
  configItems: [
    {
      name: 'primary-color',
      label: 'Primary Color',
      render: 'color',
      valueType: 'color',
      value: '#ff8c00'
    },
    {
      name: 'background-color',
      label: 'Background Color',
      render: 'color',
      valueType: 'color',
      value: '#1a1a1a'
    },
    {
      name: 'surface-color',
      label: 'Surface Color',
      render: 'color',
      valueType: 'color',
      value: '#2d2d2d'
    },
    {
      name: 'text-color',
      label: 'Text Color',
      render: 'color',
      valueType: 'color',
      value: '#e0e0e0'
    },
    {
      name: 'text-secondary',
      label: 'Secondary Text Color',
      render: 'color',
      valueType: 'color',
      value: '#b0b0b0'
    },
    {
      name: 'border-color',
      label: 'Border Color',
      render: 'color',
      valueType: 'color',
      value: '#404040'
    },
    {
      name: 'hover-color',
      label: 'Hover Color',
      render: 'color',
      valueType: 'color',
      value: '#333333'
    },
    {
      name: 'accent-color',
      label: 'Accent Color',
      render: 'color',
      valueType: 'color',
      value: '#ff8c00'
    }
  ]
};

export const loadKortexConfig = (): ConfigItem[] => {
  return kortexConfig.configItems || [];
};
