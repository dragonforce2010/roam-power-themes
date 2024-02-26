import { Drawer, Radio, RadioChangeEvent, Space, Tabs } from 'antd';
import React, { Children, ReactNode, useEffect, useState } from 'react';
import useThemeStore from '../store/useThemeStore';
import { BgColorsOutlined, SettingFilled, SettingOutlined } from '@ant-design/icons';
import { Select, Input, Switch, Slider, ColorPicker, Typography } from 'antd';
const { Title, Text } = Typography;
import { Color, ColorPickerProps } from 'antd/es/color-picker';
import { findStyleRuleWithCallBack } from '../utils/configUtil';
import renderManager from './renders/renderManager';
import { Category, ConfigItem, ThemeConfig } from '../theme-manager/theme-config';
import CategorySettings from './categorySettings';
import { Tab } from '@blueprintjs/core';
import { combineThemeStyleProperties, loadAndApplyThemeStyleProperties, themeConfig } from '../theme-manager/theme-manager';

const ThemeSetting: React.FC = () => {
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen);
  const drawerPosition = useThemeStore((state: any) => state.drawerPosition)
  const setDrawerPosition = useThemeStore((state: any) => state.setDrawerPosition)
  const [tabPosition, setTabPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left')
  console.log('isThemeSettingPanelOpen', isThemeSettingPannelOpen)

  const hideThemeSettingPannel = useThemeStore((state: any) => state.hideThemeSettingPannel);
  const currentTheme = useThemeStore((state: any) => state.currentTheme);
  console.log('currentTheme', currentTheme)
  const config = currentTheme as ThemeConfig;
  console.log('TestLog: ~ config:', config)
  // const [v, setV] = useState(0)
  // const [tabs, setTabs] = useState([])

  // useEffect(() => {
  //   setV(v + 1)
  //   console.log('我被调用了，当前currentTheme更新了, v=', v)
  //   setTabs(config?.categories?.map((category: Category, index: number) => {
  //     console.log('TestLog: ~ config?.categories?.map ~ category:', category)
  //     return {
  //       label: category.label,
  //       key: index + '',
  //       children: (
  //         <React.Fragment>
  //           <CategorySettings categorySetting={category} configItems={config.configItems} key={category.name} />
  //         </React.Fragment>
  //       ),
  //     }
  //   }))
  // }, [JSON.stringify(currentTheme)])

  const handleClose = () => {
    hideThemeSettingPannel();
  };

  const headerConfigButton = () => {
    function changeTabPosition(e: RadioChangeEvent): void {
      setDrawerPosition(e.target.value);
    }

    return <Space>
      <SettingFilled />
      <Radio.Group value={drawerPosition} onChange={changeTabPosition} buttonStyle='solid'>
        <Radio.Button value="left">left</Radio.Button>
        <Radio.Button value="right">right</Radio.Button>
      </Radio.Group>
    </Space>
  }

  const tabPositionConfig = () => {
    function changeTabPosition(e: RadioChangeEvent): void {
      setTabPosition(e.target.value);
    }

    return <Space className='tabConfigRadioGroup'>
      <SettingOutlined />
      <h3>Tab Position Settings</h3>
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
      placement={drawerPosition}
      closable={false}
      onClose={handleClose}
      open={isThemeSettingPannelOpen}
      getContainer={false}
    >
      {tabPositionConfig()}
      <Tabs
        tabPosition={tabPosition}
        items={config?.categories?.map((category: Category, index: number) => {
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
        })}
      >

      </Tabs>
    </Drawer >
  );
};

export default ThemeSetting;