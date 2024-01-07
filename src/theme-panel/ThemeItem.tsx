import React from 'react';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { updateTheme } from '../theme-manager/theme-manager';

interface Theme {
  name?: string
  label?: string
}

const ThemeItem: React.FC<Theme> = ({
  label,
  name,
}) => {
  return <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={`/theme-cover/${name}.png`} />}
    onClick={() => updateTheme(name)}
  >
    <Meta title={label} />
  </Card>
}

export default ThemeItem