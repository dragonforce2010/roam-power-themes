import React, { useState } from 'react'
import { Select, Input, Switch, Slider, ColorPicker, Typography } from 'antd';
import { Color, ColorPickerProps } from 'antd/es/color-picker';
import { HighlightFilled } from '@ant-design/icons';
import './index.css'
import { findStyleRuleWithCallBack } from '../../utils/configUtil';
import { ConfigItem } from '../../theme-manager/theme-config';
import { ROAM_POWER_THEME_NAMESPACE } from '../../common/constants';
import { combineThemeStyleProperties, updateThemeStyleProperty } from '../../theme-manager/theme-manager';
import useThemeStore from '../../store/useThemeStore';
const { Title, Text } = Typography;

export interface ColorPickerRenderProps {
  configItem: ConfigItem
}

const ColorPickerRender: React.FC<ColorPickerRenderProps> = ({ configItem }) => {
  const currentTheme = useThemeStore((state: any) => state.currentTheme);
  const setCurrentTheme = useThemeStore((state: any) => state.setCurrentTheme);
  // console.log('TestLog: ~ color picker configItem:', configItem)

  function handleValueChange(value: Color, hex: string): void {
    configItem.value = hex
    updateThemeStyleProperty(currentTheme, configItem, hex)
    setCurrentTheme({ ...currentTheme });
  }

  return <div className='config'>
    <HighlightFilled className='configItem' /><Text className='configItem'>{configItem.label}</Text>
    <ColorPicker value={configItem.value} onChange={handleValueChange} showText />
  </div>
}

export default ColorPickerRender