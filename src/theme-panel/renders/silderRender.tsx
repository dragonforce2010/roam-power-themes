import { SlidersFilled } from '@ant-design/icons';
import { Select, Slider, Typography } from 'antd';
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
  // const [value, setValue] = useState<number>(configItem.value);
  const setCurrentTheme = useThemeStore((state: any) => state.setCurrentTheme);
  // console.log('TestLog: ~  sliderRender configItem:', configItem)
  function handleValueChange(value: number): void {
    // console.log('TestLog: ~ handleValueChange ~ value:', value)
    // console.log('TestLog: ~ handleValueChange ~ configItem.name:', configItem.name)
    // setValue(value)
    configItem.value = value
    updateThemeStyleProperty(currentTheme, configItem, value + configItem.unit)
    setCurrentTheme({ ...currentTheme });
  }

  return <div className='config'>
    <SlidersFilled className='configItem' />
    <Text className='configItemText'>{configItem.label}</Text>
    <Select
      className='select'
      value={configItem.value.toString()}
      onChange={handleValueChange}
      showSearch // 允许用户搜索选项或手动输入
      optionFilterProp="children" // 用于筛选的 Option 属性
    >
      {/* 根据步长生成下拉菜单的选项 */}
      {Array.from({ length: (configItem.maxValue - configItem.minValue) / configItem.step + 1 }, (_, index) => (
        <Select.Option value={(configItem.minValue + index * configItem.step).toString()}>
          {configItem.minValue + index * configItem.step} {configItem.unit}
        </Select.Option>
      ))}
    </Select>
    <Slider className='slider'
      min={configItem.minValue}
      max={configItem.maxValue}
      value={configItem.value}
      step={configItem.step} onChange={handleValueChange} />
  </div>
}

export default SilderRender