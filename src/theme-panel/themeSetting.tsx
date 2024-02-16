import { Drawer, Radio, RadioChangeEvent, Space, Tabs } from 'antd';
import React, { Children, ReactNode, useState } from 'react';
import useThemeStore from '../store/useThemeStore';
import { BgColorsOutlined, SettingFilled } from '@ant-design/icons';
import { Select, Input, Switch, Slider, ColorPicker, Typography } from 'antd';
const { Title, Text } = Typography;
import { Color, ColorPickerProps } from 'antd/es/color-picker';
import { findStyleRuleWithCallBack } from '../utils/configUtil';
import renderManager from './renders/renderManager';
import { Category, ConfigItem, ThemeConfig } from '../themes/theme-config';
import CategorySettings from './categorySettings';
import { Tab } from '@blueprintjs/core';

const ThemeSetting: React.FC = () => {
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen);
  const [tabPosition, setTabPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left')
  console.log('isThemeSettingPanelOpen', isThemeSettingPannelOpen)

  const hideThemeSettingPannel = useThemeStore((state: any) => state.hideThemeSettingPannel);
  const currentTheme = useThemeStore((state: any) => state.currentTheme);
  console.log('currentTheme', currentTheme)
  const config = currentTheme.config as ThemeConfig;
  console.log('TestLog: ~ config:', config)

  const handleClose = () => {
    hideThemeSettingPannel();
  };

  const headerConfigButton = () => {
    function changeTabPosition(e: RadioChangeEvent): void {
      setTabPosition(e.target.value);
    }

    return <Space>
      <SettingFilled />
      <Radio.Group value={tabPosition} onChange={changeTabPosition} buttonStyle='solid'>
        <Radio.Button value="top">top</Radio.Button>
        <Radio.Button value="bottom">bottom</Radio.Button>
        <Radio.Button value="left">left</Radio.Button>
        <Radio.Button value="right">right</Radio.Button>
      </Radio.Group>
    </Space>
  }

  return (
    <Drawer
      title={
        <>
          <BgColorsOutlined />
          <span className='drawerTitle'>Theme Settings - {currentTheme.name}</span>
        </>
      }
      extra={headerConfigButton()}
      width={'45%'}
      placement='right'
      closable={false}
      onClose={handleClose}
      open={isThemeSettingPannelOpen}
      getContainer={false}
    >
      <Tabs
        tabPosition={tabPosition}
        items={
          config?.categories?.map((category: Category, index: number) => {
            console.log('TestLog: ~ config?.categories?.map ~ category:', category)
            return {
              label: category.label,
              key: index + '',
              children: (
                <React.Fragment>
                  <CategorySettings categorySetting={category} configItems={config.configItems} key={category.name} />
                </React.Fragment>
              ),
            }
          })
        }
      >

      </Tabs>
    </Drawer >
  );
};

export default ThemeSetting;