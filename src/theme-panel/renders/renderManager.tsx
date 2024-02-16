import { ConfigItem, ThemeConfig } from '../../themes/theme-config'
import ColorPickerRender, { ColorPickerRenderProps } from './colorPickerRender'
import SilderRender, { SliderRenderProps } from './silderRender'
import React from 'react'

const renderConfigItem = (configItem: ConfigItem) => {
  const { render } = configItem

  console.log('got render', render, configItem)

  switch (render) {
    case 'sliderRender':
      return <SilderRender {...(configItem as SliderRenderProps)} />
    case 'colorPickerRender':
      return <ColorPickerRender {...(configItem as ColorPickerRenderProps)} ></ColorPickerRender>
    default:
      return <div>configuration error</div>
  }
}

export default {
  renderConfigItem
}