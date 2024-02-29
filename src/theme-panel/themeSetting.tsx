import { BgColorsOutlined, CopyOutlined, InfoCircleFilled, SaveFilled, SaveOutlined, SettingFilled, SettingOutlined } from '@ant-design/icons';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import CodeMirror from '@uiw/react-codemirror';
import { Button, Drawer, Radio, RadioChangeEvent, Space, Tabs, Typography, theme, Card, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import useThemeStore from '../store/useThemeStore';
import { Category, ThemeConfig } from '../theme-manager/theme-config';
import CategorySettings from './categorySettings';
import { ROAM_POWER_THEME_NAMESPACE } from '../common/constants';
import { findStyleRuleWithCallBack } from '../utils/configUtil';
import { transformCurrentThemeData } from '../theme-manager/theme-manager';
const { Title, Text } = Typography;

const ThemeSetting: React.FC = () => {
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen);
  const drawerPosition = useThemeStore((state: any) => state.drawerPosition)
  const setDrawerPosition = useThemeStore((state: any) => state.setDrawerPosition)
  const [tabPosition, setTabPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left')
  // console.log('isThemeSettingPanelOpen', isThemeSettingPannelOpen)

  const hideThemeSettingPannel = useThemeStore((state: any) => state.hideThemeSettingPannel);
  const allThemes = useThemeStore((state: any) => state.allThemes)
  const setAllThemes = useThemeStore((state: any) => state.setAllThemes)
  const currentTheme = useThemeStore((state: any) => state.currentTheme as ThemeConfig);
  const setCurrentTheme = useThemeStore((state: any) => state.setCurrentTheme)
  const themeMode = useThemeStore((state: any) => state.themeMode as string)
  const setThemeMode = useThemeStore((state: any) => state.setThemeMode)
  const config = currentTheme as ThemeConfig;
  const [codeEditorValue, setCodeEditorValue] = useState<any>();

  useEffect(() => {
    setCodeEditorValue(transformCurrentThemeData(currentTheme))
  }, [currentTheme])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const mode = window.extensionAPI.settings.get('css-appearance')
  //     console.log('TestLog: ~ interval ~ theme mode:', mode)

  //     if (mode === themeMode || !mode)
  //       return
  //     setThemeMode(mode)
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('themeMode change', themeMode)
  //   const theme = allThemes.filter((theme: ThemeConfig) => theme.type === themeMode?.toLowerCase() && theme.label === currentTheme.label)[0]
  //   setCurrentTheme(theme)
  // }, [themeMode])

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
      navigator.clipboard.writeText(JSON.stringify(codeEditorValue, null, 2)).then(() => {
        // 成功复制后的操作，比如弹出提示信息
        // console.log('Theme config copied.');
      }, (err) => {
        // 异常处理
        console.error('Could not copy theme config: ', err);
      });
    };

    const handleUpdateThemeSettings = () => {
      if (!currentTheme) {
        throw new Error('current theme is null!')
      }

      const themeSettingsItems = codeEditorValue?.configItems || {};
      // console.log('TestLog: ~ handleUpdateThemeSettings ~ themeSettingsItems- themeSettignsItems:', themeSettingsItems)
      // console.log('TestLog: ~ handleUpdateThemeSettings ~ themeSettingsItems - codeEditorValue: ', codeEditorValue)
      // console.log('TestLog: ~ handleUpdateThemeSettings ~ themeSettingsItems - currentTheme: ', currentTheme)

      for (let key in codeEditorValue) {
        if (!Object.hasOwnProperty.call(codeEditorValue, key))
          continue
        if (key === 'configItems' || key === 'name' || !codeEditorValue[key]) continue
        window.extensionAPI.settings.set([ROAM_POWER_THEME_NAMESPACE, currentTheme.name, key].join('-'), codeEditorValue[key])
        currentTheme[key] = codeEditorValue[key]
      }


      const currentThemeConfigItems = currentTheme?.configItems;
      for (let key of Object.keys(themeSettingsItems || {})) {
        const value = themeSettingsItems[key];
        // console.log('TestLog: ~ handleUpdateThemeSettings ~ themeSettingsItems - key, value: ', key, value)
        // console.log('TestLog: ~ handleUpdateThemeSettings ~ themeSettingsItems - currentTheme: ', currentTheme)
        const currentThemeConfigItem = (currentThemeConfigItems || [])?.find(item => item.name === key)
        const propertyValue = value + (currentThemeConfigItem?.unit ?? '')
        currentThemeConfigItem.value = propertyValue?.replace(currentThemeConfigItem.unit, '')
        // console.log('continue----')
        findStyleRuleWithCallBack('.' + ROAM_POWER_THEME_NAMESPACE, (rule: CSSStyleRule) => rule.style.setProperty(key, propertyValue))
        console.log('update the settings from code', key, propertyValue)
        window.extensionAPI.settings.set([ROAM_POWER_THEME_NAMESPACE, currentTheme.name, key].join('-'), propertyValue)
        console.log('update the settings from code - extension API', [ROAM_POWER_THEME_NAMESPACE, currentTheme.name, key].join('-'), propertyValue)
      }

      setCurrentTheme({
        ...currentTheme,
        configItems: currentThemeConfigItems
      })
    }

    const codeTab = {
      label: 'Config Inspector',
      key: 'config-inspector',
      children: (<React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleCopyConfig}><CopyOutlined /> Copy Values</Button>
          <Button onClick={handleUpdateThemeSettings}><SaveFilled /> Update Theme Settings</Button>
        </div>
        <CodeMirror
          value={JSON.stringify(codeEditorValue, null, 2)}
          extensions={[javascript({ jsx: true, }), json()]}
          aria-multiline={true}
          onChange={(value) => {
            // console.log('code editor value', value)
            setCodeEditorValue(JSON.parse(value))
          }}
        ></CodeMirror>
      </React.Fragment>)
    }

    const basicInfoSettingTab = {
      label: 'Basic Info Settings',
      key: 'basic-info-settings',
      children: (<React.Fragment>
        <div className='basicInfoSettings'>
          <InfoCircleFilled></InfoCircleFilled>
          <Text>Theme Key</Text>
          <Input
            value={currentTheme.name}
            disabled>
          </Input>

          <InfoCircleFilled></InfoCircleFilled>
          <Text>Theme Display Name</Text>
          <Input
            value={currentTheme.label}
            onChange={(e) => {
              window.extensionAPI.settings.set([ROAM_POWER_THEME_NAMESPACE, currentTheme.name, 'name'].join('-'), e.target.value)
              const updatedCurrentTheme = { ...currentTheme, label: e.target.value };
              setCurrentTheme(updatedCurrentTheme)
            }}></Input>

          <InfoCircleFilled></InfoCircleFilled>
          <Text>Theme Cover Url</Text>
          <Input
            defaultValue={currentTheme.coverUrl}
            onChange={(e) => {
              // console.log('TestLog: ~ handle input change ~ value:', e)
              window.extensionAPI.settings.set([ROAM_POWER_THEME_NAMESPACE, currentTheme.name, 'coverUrl'].join('-'), e.target.value)
              const updatedCurrentTheme = { ...currentTheme, coverUrl: e.target.value };
              setCurrentTheme(updatedCurrentTheme)
            }}></Input>
        </div>
      </React.Fragment>)
    }

    const items = []
    const themeConfigTabs = config?.categories?.map((category: Category, index: number) => {
      // console.log('TestLog: ~ config?.categories?.map ~ category:', category);
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

    items.push(basicInfoSettingTab)
    items.push(...themeConfigTabs);
    items.push(codeTab)

    return items
  }
  return (
    <Drawer
      title={
        <>
          <BgColorsOutlined />
          <span className='drawerTitle'>Theme Settings - {currentTheme.label}</span>
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