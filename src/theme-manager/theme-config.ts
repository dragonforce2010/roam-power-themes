import { create } from 'zustand';

export interface ConfigItem {
  name: string
  label: string
  render: string
  valueType: string
  value: any,
  // slider Render Props definition
  minValue?: number
  maxValue?: number
  step?: number
  unit?: string
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
  label: string
  type?: 'dark' | 'light'
  commandLabel?: string
  coverUrl?: string
  categories?: Category[]
  configItems?: ConfigItem[]
}
