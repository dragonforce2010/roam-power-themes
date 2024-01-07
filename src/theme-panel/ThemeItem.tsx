import React from 'react';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';

interface Theme {
  name?: string
  label?: string
  previewPic?: string
}

const ThemeItem: React.FC<Theme> = ({
  label,
}) => {
  return <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={label} description="www.instagram.com" />
  </Card>
}

export default ThemeItem