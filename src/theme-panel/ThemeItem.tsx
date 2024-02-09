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
  const showThemeSettingPannel = useThemeStore((state: any) => state.showThemeSettingPannel)

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
        setCurrentTheme(name)
        console.log('theme label', label)
        console.log('theme name', name)
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
          }}
        >设置</Button>
      </div>
    </Card>
  </>

}

export default ThemeItem