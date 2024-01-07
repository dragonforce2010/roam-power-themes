import React from 'react';
import UseDrawerState from '../hooks/useDrawerState';
import useThemeStore from '../store/useThemeStore';
import { Button } from 'antd';
import Icon from '@ant-design/icons'
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { ThemeIcon1 } from '../icons/ThemeIcon1';
import { ThemeIcon2StraightRegular } from '../icons/ThemeIcon2StraightRegular';


const SideBarButton = () => {
  const showThemeSettingPanel = useThemeStore((state: any) => state.showThemeSettingPanel)


  return <Button
    type='text'
    icon={<ThemeIcon1></ThemeIcon1>}
    className="log-button no-outline"
    onClick={() => {
      showThemeSettingPanel()
      console.log('clicked');
    }}>Power Themes</Button>
}

export default SideBarButton