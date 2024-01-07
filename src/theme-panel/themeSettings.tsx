import React, { useState } from 'react';
import { Button, Drawer, theme } from 'antd';
import { FireOutlined } from '@ant-design/icons'
import UseDrawerState from '../hooks/useDrawerState';
import useThemeStore from '../store/useThemeStore';
import ThemeItem from './ThemeItem';
import './index.css'
import { ThemeIconRoundedSolid } from '../icons/ThemeIcon2RoundedSolid';



const ThemeSettings = () => {
  const allThemes = useThemeStore((state: any) => state.allThemes)
  const isThemeSettingPanelOpen = useThemeStore((state: any) => state.isThemeSettingPanelOpen)
  const showThemeSettingPanel = useThemeStore((state: any) => state.showThemeSettingPanel)
  const hideThemeSettingPanel = useThemeStore((state: any) => state.hideThemeSettingPanel)

  const onClose = () => {
    hideThemeSettingPanel()
  }

  console.log("THEMEsETTINGS initialized！")
  return <div className='dongyuhui'>
    <Button
      icon={<FireOutlined />}
      onClick={() => showThemeSettingPanel()}
    >Power Themes</Button>
    <Drawer
      title={<>
        <ThemeIconRoundedSolid></ThemeIconRoundedSolid>
        <span className='drawerTitle'>Theme Cener</span>
      </>}
      size='large'
      placement="right"
      closable={false}
      onClose={onClose}
      open={isThemeSettingPanelOpen}
      getContainer={false}
    >
      <div className='themeItemContainer'>
        {allThemes.map((theme: any) => {
          return <ThemeItem label={theme.label} name={theme.name}></ThemeItem>
        })}
      </div>
    </Drawer>
  </div>
}

export default ThemeSettings