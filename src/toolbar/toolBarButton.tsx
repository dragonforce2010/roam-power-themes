import React from 'react';
import UseDrawerState from '../hooks/useDrawerState';
import useThemeStore from '../store/useThemeStore';
import { Button } from 'antd';
import { ThemeIcon1 } from '../icons/ThemeIcon1';
import { ThemeIconRoundedSolid } from '../icons/ThemeIcon2RoundedSolid';

const ToolBarButton = () => {
  const showThemeSettingPanel = useThemeStore((state: any) => state.showThemeSettingPanel)
  const isShowToolbarButton = useThemeStore((state: any) => state.isShowToolbarButton)
  return <>
    {isShowToolbarButton && <Button
      type='text'
      icon={<ThemeIconRoundedSolid></ThemeIconRoundedSolid>}
      className="log-button no-outline"
      onClick={() => {
        showThemeSettingPanel()
        console.log('clicked');
      }}></Button>}
  </>
}

export default ToolBarButton