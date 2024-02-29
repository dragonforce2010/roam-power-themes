import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import useThemeStore from '../store/useThemeStore';
import { ConfigItem, ThemeConfig } from '../theme-manager/theme-config';
import { findStyleRuleWithCallBack } from '../utils/configUtil';
import { combineThemeStyleProperties, loadAndApplyThemeStyleProperties } from '../theme-manager/theme-manager';

interface ThemeItemProps {
  themeConfig: ThemeConfig
}

const ThemeItem: React.FC<ThemeItemProps> = ({
  themeConfig
}) => {
  const [prevTheme, setPrevTheme] = useState<string>()
  const [isSelectTheme, setIsSelectTheme] = useState<boolean>(false)
  const setCurrentTheme = useThemeStore((state: any) => state.setCurrentTheme)
  const currentTheme = useThemeStore((state: any) => state.currentTheme)
  const showThemeSettingPannel = useThemeStore((state: any) => state.showThemeSettingPannel)
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen);

  const loadAndApplyTheme = () => {
    // setCurrentTheme({})

    // console.log('TestLog: ~ 点击准备apply theme config:', themeConfig)
    const latestThemeConfig = loadAndApplyThemeStyleProperties(themeConfig)
    // console.log('TestLog: ~ 设置currentTheme:', themeConfig)
    setCurrentTheme(latestThemeConfig)
    // console.log('currentTheme', latestThemeConfig)
    setIsSelectTheme(!isSelectTheme)
  }

  return <>
    <Card
      // className={`themeCard ${isSelectTheme ? 'selectedTheme' : ''}`}
      className={`themeCard`}
      hoverable
      bordered={false}
      style={{ width: 240, border: 'none' }}
      cover={<img alt="example" src={themeConfig.coverUrl} />}
      onClick={loadAndApplyTheme}
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
        <Meta title={themeConfig.label} />
        <Button
          type='primary'
          onClick={() => {
            loadAndApplyTheme()
            showThemeSettingPannel()
            console.log('设置setting pannel to open')
          }}
        >设置</Button>
      </div>
    </Card>
  </>

}

export default ThemeItem