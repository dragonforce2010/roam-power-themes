import React from 'react';
import UseDrawerState from '../hooks/useDrawerState';
import useThemeStore from '../store/useThemeStore';
import { Button } from 'antd';
import { ThemeIcon1 } from '../icons/ThemeIcon1';
import { ThemeIconRoundedSolid } from '../icons/ThemeIcon2RoundedSolid';

const ToolBarButton = () => {
  const showThemeSettingPanel = useThemeStore((state: any) => state.showThemeSettingPanel)
  const isShowToolbarButton = useThemeStore((state: any) => state.isShowToolbarButton)
  const currentTheme = useThemeStore((state: any) => {
    console.log(`currentTheme.toLowerCase().indexOf('dark')`, state.currentTheme.toLowerCase().indexOf('dark'))
    return state.currentTheme
  })

  return <>
    {isShowToolbarButton && <Button
      type='text'
      icon={currentTheme.toLowerCase().indexOf('dark') != -1 ? <ThemeIcon1></ThemeIcon1> : <ThemeIconRoundedSolid></ThemeIconRoundedSolid>}
      className="log-button no-outline"
      onClick={() => {
        showThemeSettingPanel()
      }}></Button>}
  </>
}

export default ToolBarButton