import React, { useEffect } from 'react';
import UseDrawerState from '../hooks/useDrawerState';
import useThemeStore from '../store/useThemeStore';
import { Button } from 'antd';
import Icon from '@ant-design/icons'
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { ThemeIcon1 } from '../icons/ThemeIcon1';
import { ThemeIcon2StraightRegular } from '../icons/ThemeIcon2StraightRegular';


const SideBarButton = () => {
  const showThemeSettingPanel = useThemeStore((state: any) => {
    return state.showThemeSettingPanel
  })
  const isShowSidebarButton = useThemeStore((state: any) => {
    // @ts-ignore
    window.showSidebarButton = state.showSidebarButton
    // @ts-ignore
    window.hideSidebarButton = state.hideSidebarButton
    // @ts-ignore
    window.showToolbarButton = state.showToolbarButton
    // @ts-ignore
    window.hideToolbarButton = state.hideToolbarButton
    return state.isShowSidebarButton
  })

  return <>
    {isShowSidebarButton && <Button
      type='text'
      icon={<ThemeIcon1></ThemeIcon1>}
      className="log-button no-outline"
      onClick={() => {
        showThemeSettingPanel()
        console.log('clicked');
      }}>Power Themes</Button>}
  </>
}

export default SideBarButton