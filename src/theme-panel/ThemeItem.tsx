import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import { getCurrentTheme, updateTheme } from '../theme-manager/theme-manager';
import useThemeStore from '../store/useThemeStore';

interface Theme {
  name?: string
  label?: string
  cover?: string
  config?: []
}

const ThemeItem: React.FC<Theme> = (theme) => {
  const {
    label,
    name,
    cover,
  } = theme
  const [prevTheme, setPrevTheme] = useState<string>()
  const [isSelectTheme, setIsSelectTheme] = useState<boolean>(false)
  const setCurrentTheme = useThemeStore((state: any) => state.setCurrentTheme)
  const showThemeSettingPannel = useThemeStore((state: any) => state.showThemeSettingPannel)
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen);

  return <>
    <Card
      // className={`themeCard ${isSelectTheme ? 'selectedTheme' : ''}`}
      className={`themeCard`}
      hoverable
      bordered={false}
      style={{ width: 240, border: 'none' }}
      cover={<img alt="example" src={cover} />}
      onClick={() => {
        // hideThemeListPanel()
        updateTheme(name)
        // setCurrentTheme(name)
        setCurrentTheme(theme)
        console.log('currentTheme', theme)
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
        <Button
          type='primary'
          onClick={() => {
            showThemeSettingPannel()
            console.log('设置setting pannel to open')
            console.log('isThemeSettingPannelOpen', isThemeSettingPannelOpen)
          }}
        >设置</Button>
      </div>
    </Card>
  </>

}

export default ThemeItem