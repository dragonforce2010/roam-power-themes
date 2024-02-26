import { SlidersFilled } from '@ant-design/icons';
import { Slider, Typography } from 'antd';
import React, { useState } from 'react';
import './index.css'
import { ConfigItem } from '../../theme-manager/theme-config';
import { findStyleRuleWithCallBack } from '../../utils/configUtil';
import { ROAM_POWER_THEME_NAMESPACE } from '../../common/constants';
import useThemeStore from '../../store/useThemeStore';
import { updateThemeStyleProperty } from '../../theme-manager/theme-manager';
const { Text } = Typography;

export interface SliderRenderProps {
  configItem: ConfigItem
}

const SilderRender: React.FC<SliderRenderProps> = ({ configItem }) => {
  const currentTheme = useThemeStore((state: any) => state.currentTheme);
  const [value, setValue] = useState<number>(configItem.value);
  console.log('TestLog: ~  sliderRender configItem:', configItem)

  function handleValueChange(value: number): void {
    console.log('TestLog: ~ handleValueChange ~ value:', value)
    console.log('TestLog: ~ handleValueChange ~ configItem.name:', configItem.name)
    setValue(value)
    // configItem.value = value
    updateThemeStyleProperty(currentTheme, configItem, value + configItem.unit)
  }

  return <div className='config'>
    <SlidersFilled className='configItem' />
    <Text className='configItem'>{configItem.label}</Text>
    <Slider className='slider'
      min={configItem.minValue}
      max={configItem.maxValue}
      step={configItem.step} value={value} onChange={handleValueChange} />
  </div>
}

export default SilderRender