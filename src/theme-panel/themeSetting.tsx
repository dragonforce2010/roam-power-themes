import { BgColorsOutlined, CopyOutlined, SettingFilled, SettingOutlined } from '@ant-design/icons';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import CodeMirror from '@uiw/react-codemirror';
import { Button, Drawer, Radio, RadioChangeEvent, Space, Tabs, Typography, theme, Card } from 'antd';
import React, { useState } from 'react';
import useThemeStore from '../store/useThemeStore';
import { Category, ThemeConfig } from '../theme-manager/theme-config';
import CategorySettings from './categorySettings';
const { Title, Text } = Typography;

const ThemeSetting: React.FC = () => {
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen);
  const drawerPosition = useThemeStore((state: any) => state.drawerPosition)
  const setDrawerPosition = useThemeStore((state: any) => state.setDrawerPosition)
  const [tabPosition, setTabPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left')
  console.log('isThemeSettingPanelOpen', isThemeSettingPannelOpen)

  const hideThemeSettingPannel = useThemeStore((state: any) => state.hideThemeSettingPannel);
  const currentTheme = useThemeStore((state: any) => state.currentTheme as ThemeConfig);
  console.log('currentTheme', currentTheme)
  const config = currentTheme as ThemeConfig;
  console.log('TestLog: ~ config:', config)

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

  const tabItems = () => {
    const handleCopyConfig = () => {
      // 使用 Clipboard API 来复制文本
      navigator.clipboard.writeText(JSON.stringify(currentTheme, null, 2)).then(() => {
        // 成功复制后的操作，比如弹出提示信息
        console.log('Theme config copied.');
      }, (err) => {
        // 异常处理
        console.error('Could not copy theme config: ', err);
      });
    };

    const transformCurrentThemeData = () => {
      const themeConfigData = {
        name: currentTheme.name,
        label: currentTheme.label,
        type: currentTheme.type,
        coverUrl: currentTheme.coverUrl,
        commandLabel: currentTheme.commandLabel,
        configItems: {}
      }
      const configItems: { [key: string]: any } = {}
      for (let item of currentTheme.configItems || []) {
        configItems[item.name] = item.value
      }
      themeConfigData.configItems = configItems

      console.log(themeConfigData)

      return themeConfigData
    }
    const codeTab = {
      label: 'Config Inspector',
      key: 'config-inspector',
      children: (<React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleCopyConfig}><CopyOutlined /> Copy Values</Button>
        </div>
        <CodeMirror
          value={JSON.stringify(transformCurrentThemeData(), null, 2)}
          extensions={[javascript({ jsx: true, }), json()]}
          aria-multiline={true}
        ></CodeMirror>
      </React.Fragment>)
    }

    const items = []
    const themeConfigTabs = config?.categories?.map((category: Category, index: number) => {
      console.log('TestLog: ~ config?.categories?.map ~ category:', category);
      return {
        label: category.label,
        key: index + '',
        children: (
          <React.Fragment>
            <CategorySettings categorySetting={category} configItems={config.configItems} key={category.name} />
          </React.Fragment>
        ),
      };
    }) || []
    items.push(...themeConfigTabs);
    items.push(codeTab)

    return items
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
        items={tabItems()}
      >

      </Tabs>
    </Drawer >
  );
};

export default ThemeSetting;