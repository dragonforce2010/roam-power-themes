import { Drawer } from 'antd';
import React, { useState } from 'react';
import useThemeStore from '../store/useThemeStore';
import { BgColorsOutlined } from '@ant-design/icons';
import { Select, Input, Switch, Slider, ColorPicker, Typography } from 'antd';
import { Color, ColorPickerProps } from 'antd/es/color-picker';
import { findStyleRuleWithCallBack } from '../utils/configUtil';
const { Title, Text } = Typography;

// import { Color, ColorResult } from 'react-color';


interface Props {
  // themeName?: string
}

const themeSetting: React.FC<Props> = () => {
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen)
  const hideThemeSettingPannel = useThemeStore((state: any) => state.hideThemeSettingPannel)
  const themeName = useThemeStore((state: any) => state.currentTheme)
  const [fontFamily, setFontFamily] = useState<string>('');
  const [fontSize, setFontSize] = useState<number>(16);
  const [primaryTitleColor, setPrimaryTitleColor] = useState<ColorPickerProps['value']>('#000000');
  const [primaryTitleFontSize, setPrimaryTitleFontSize] = useState<number>(24);
  const [primaryTitleLetterSpacing, setPrimaryTitleLetterSpacing] = useState<number>(0);
  const [secondaryTitleColor, setSecondaryTitleColor] = useState<ColorPickerProps['value']>('#000000');
  const [secondaryTitleFontSize, setSecondaryTitleFontSize] = useState<number>(20);
  const [secondaryTitleLetterSpacing, setSecondaryTitleLetterSpacing] = useState<number>(0);
  const [showLinkUnderline, setShowLinkUnderline] = useState<boolean>(true);
  const [linkColor, setLinkColor] = useState<ColorPickerProps['value']>('#0000FF');
  const [codeBlockStyle, setCodeBlockStyle] = useState<string>('');

  const handleFontFamilyChange = (value: string) => {
    setFontFamily(value);
  };

  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
    // findStyleRuleWithCallBack(themeName, (rule: CSSStyleRule) => rule.style.setProperty(propName, fontSize))
  };

  const handlePrimaryTitleColorChange = (color: Color, hex: string) => {
    setPrimaryTitleColor(hex);
    console.log('change primary color', themeName, color, hex)
    findStyleRuleWithCallBack('.' + themeName, (rule: CSSStyleRule) => rule.style.setProperty('--primary-color', hex))
    window.extensionAPI.settings.set('--primary-color', hex)
    // findStyleRuleWithCallBack(themeName, (rule: CSSStyleRule) => rule.style.setProperty('--primary-title-color', color.toHex()))
  };

  const handlePrimaryTitleFontSizeChange = (value: number) => {
    setPrimaryTitleFontSize(value);
  };

  const handlePrimaryTitleLetterSpacingChange = (value: number) => {
    setPrimaryTitleLetterSpacing(value);
  };

  const handleSecondaryTitleColorChange = (color: Color, hex: string) => {
    setSecondaryTitleColor(hex);
  };

  const handleSecondaryTitleFontSizeChange = (value: number) => {
    setSecondaryTitleFontSize(value);
  };

  const handleSecondaryTitleLetterSpacingChange = (value: number) => {
    setSecondaryTitleLetterSpacing(value);
  };

  const handleShowLinkUnderlineChange = (checked: boolean) => {
    setShowLinkUnderline(checked);
  };

  const handleLinkColorChange = (color: Color, hex: string) => {
    setLinkColor(hex);
  };

  const handleCodeBlockStyleChange = (value: string) => {
    setCodeBlockStyle(value);
  };

  const onClose = () => {
    hideThemeSettingPannel()
  }
  return <>
    <Drawer
      title={<>
        <BgColorsOutlined />
        <span className='drawerTitle'>Theme Settings - {themeName} </span>
      </>}
      size='default'
      placement="right"
      closable={false}
      onClose={onClose}
      open={isThemeSettingPannelOpen}
      getContainer={false}
    >
      <div>
        <div>
          <Text>主题字体：</Text>
          <Select value={fontFamily} onChange={handleFontFamilyChange}>
            <Select.Option value="Arial">Arial</Select.Option>
            <Select.Option value="Verdana">Verdana</Select.Option>
            <Select.Option value="Helvetica">Helvetica</Select.Option>
            {/* 其他常用字体选项 */}
          </Select>
        </div>
        <div>
          <Text>主字体字号：</Text>
          <Slider min={12} max={36} value={fontSize} onChange={handleFontSizeChange} />
        </div>
        <div>
          <Text>主题字体主色：</Text>
          <ColorPicker value={primaryTitleColor} onChange={handlePrimaryTitleColorChange} />
        </div>
        <div>
          <Text>一级标题字号：</Text>
          <Slider min={18} max={48} value={primaryTitleFontSize} onChange={handlePrimaryTitleFontSizeChange} />
        </div>
        <div>
          <Text>一级标题字间距：</Text>
          <Slider min={-5} max={5} value={primaryTitleLetterSpacing} onChange={handlePrimaryTitleLetterSpacingChange} />
        </div>
        <div>
          <Text>二级标题颜色：</Text>
          <ColorPicker value={secondaryTitleColor} onChange={handleSecondaryTitleColorChange} />
        </div>
        <div>
          <Text>二级标题字号：</Text>
          <Slider min={16} max={36} value={secondaryTitleFontSize} onChange={handleSecondaryTitleFontSizeChange} />
        </div>
        <div>
          <Text>二级标题字间距：</Text>
          <Slider min={-3} max={3} value={secondaryTitleLetterSpacing} onChange={handleSecondaryTitleLetterSpacingChange} />
        </div>
        <div>
          <Text>链接样式：</Text>
          <Switch checked={showLinkUnderline} onChange={handleShowLinkUnderlineChange} />
          <ColorPicker value={linkColor} onChange={handleLinkColorChange} />
        </div>
        <div>
          <Text>代码块样式：</Text>
          <Select value={codeBlockStyle} onChange={handleCodeBlockStyleChange}>
            <Select.Option value="default">默认</Select.Option>
            <Select.Option value="dark">暗色</Select.Option>
            <Select.Option value="light">亮色</Select.Option>
          </Select>
        </div>
        {/* 其他配置项 */}
      </div>
    </Drawer >
  </>
}

export default themeSetting