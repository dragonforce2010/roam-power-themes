import React from 'react';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { updateTheme } from '../theme-manager/theme-manager';

interface Theme {
  name?: string
  label?: string
  cover?: string
}

const ThemeItem: React.FC<Theme> = ({
  label,
  name,
  cover
}) => {
  return <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={cover} />}
    onClick={() => updateTheme(name)}
  >
    <Meta title={label} />
  </Card>
}

export default ThemeItem