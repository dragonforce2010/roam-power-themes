import { MoonOutlined, PoweroffOutlined, SunFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import useThemeStore from '../store/useThemeStore';

const ToolBarButton = () => {
  const isShowToolbarButton = useThemeStore((state: any) => state.isShowToolbarButton)
  const [icon, setIcon] = React.useState<any>(<SunFilled />)
  const setThemeMode = useThemeStore((state: any) => state.setThemeMode)
  const themeMode = useThemeStore((state: any) => state.themeMode as string)
  const currentTheme = useThemeStore((state: any) => {
    return state.currentTheme
  })

  return <>
    {isShowToolbarButton && <Button
      type='text'
      icon={icon}
      className="log-button no-outline"
      onClick={() => {
        let newThemeMode = ''
        switch (themeMode) {
          case 'dark':
            newThemeMode = 'light';
            setIcon(<SunFilled />)
            break;
          case 'light':
            newThemeMode = 'off';
            setIcon(<PoweroffOutlined />)
            break;
          case 'off':
            newThemeMode = 'dark';
            setIcon(<MoonOutlined style={{ color: 'white' }} />)
            break;
          default:
            newThemeMode = 'dark';
            setIcon(<MoonOutlined style={{ color: 'white' }} />)
            break;
        }
        setThemeMode(newThemeMode)
      }}></Button>}
  </>
}

export default ToolBarButton