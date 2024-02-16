import { SlidersFilled } from '@ant-design/icons';
import { Slider, Typography } from 'antd';
import React, { useState } from 'react';
import './index.css'
const { Text } = Typography;

export interface SliderRenderProps {
  initValue?: number
  minValue?: number
  maxValue?: number
  step?: number
  label?: string
}

const SilderRender: React.FC<SliderRenderProps> = ({ initValue, label, minValue, maxValue, step = 1 }) => {
  const [value, setValue] = useState<number>(initValue);

  function handleValueChange(value: number): void {
    setValue(value)
  }

  return <div className='config'>
    <SlidersFilled className='configItem' />
    <Text className='configItem'>{label}</Text>
    <Slider className='slider' min={minValue} max={maxValue} step={step} defaultValue={value} onChange={handleValueChange} />
  </div>
}

export default SilderRender