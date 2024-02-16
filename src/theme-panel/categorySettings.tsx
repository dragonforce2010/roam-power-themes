import React from 'react'
import { Category, ConfigItem, ThemeConfig } from '../themes/theme-config'
import SectionSettings from './sectionSettings'

interface Props {
  categorySetting: Category
  configItems: ConfigItem[]
}

const CategorySettings: React.FC<Props> = ({ categorySetting, configItems }) => {
  console.log('categorySetting, configItems', categorySetting, configItems)
  const renderSections = () => {
    return categorySetting?.sections.map((section, index) => <SectionSettings
      section={section}
      configItems={configItems}
    ></SectionSettings>)
  }

  return <>
    {renderSections()}
  </>
}

export default CategorySettings