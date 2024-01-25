import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { getCurrentTheme, updateTheme } from '../theme-manager/theme-manager';
import useThemeStore from '../store/useThemeStore';

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
  const [prevTheme, setPrevTheme] = useState<string>()
  const [isSelectTheme, setIsSelectTheme] = useState<boolean>(false)
  const setCurrentTheme = useThemeStore((state: any) => state.setCurrentTheme)

  return <>
    <Card
      // className={`themeCard ${isSelectTheme ? 'selectedTheme' : ''}`}
      className={`themeCard`}
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={cover} />}
      onClick={() => {
        // hideThemeSettingPanel()
        updateTheme(name)
        setCurrentTheme(label)
        console.log('theme label', label)
        setIsSelectTheme(!isSelectTheme)
      }}
    // onMouseEnter={() => {
    //   if (isSelectTheme)
    //     return
    //   const currTheme = getCurrentTheme()
    //   setPrevTheme(currTheme)
    //   updateTheme(name)
    // }}

    // onMouseLeave={() => {
    //   if (isSelectTheme)
    //     return
    //   updateTheme(prevTheme)
    // }}
    >
      <div className='cardFooter'>
        <Meta title={label} />
        {/* <Button type='primary'>设置</Button> */}
      </div>
    </Card>
  </>

}

export default ThemeItem