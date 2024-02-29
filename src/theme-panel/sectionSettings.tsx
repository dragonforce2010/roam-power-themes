import React from 'react'
import { ConfigItem, Section } from '../theme-manager/theme-config';
import renderManager from './renders/renderManager';

interface Props {
  section: Section
  configItems: ConfigItem[]
}

const SectionSettings: React.FC<Props> = ({ section, configItems }) => {
  const renderConfigItems = () => {
    return section?.configItems?.filter(configName => configItems.some(c => c.name === configName)).map(configName => {
      const config = configItems.find(item => item.name === configName)
      // console.log('TestLog: ~ renderConfigItems ~ config:', config)
      return renderManager.renderConfigItem(config)
    })
  }
  return <>
    <h3>{section.label}</h3>
    <hr></hr>
    {renderConfigItems()}
  </>
}

export default SectionSettings