import React, { useState } from 'react'
import { Select, Input, Switch, Slider, ColorPicker, Typography } from 'antd';
import { Color, ColorPickerProps } from 'antd/es/color-picker';
import { HighlightFilled } from '@ant-design/icons';
import './index.css'
const { Title, Text } = Typography;

export interface ColorPickerRenderProps {
  initValue?: string
  label?: string
}

const ColorPickerRender: React.FC<ColorPickerRenderProps> = ({ initValue, label }) => {
  const [value, setValue] = useState<string>(initValue);

  function handleValueChange(value: Color, hex: string): void {
    setValue(hex)
  }

  return <div className='config'>
    <HighlightFilled className='configItem' /><Text className='configItem'>{label}</Text>
    <ColorPicker defaultValue={value} onChange={handleValueChange} showText />
  </div>
}

export default ColorPickerRender