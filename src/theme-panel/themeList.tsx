import React, { useState } from 'react';
import { Button, Col, Drawer, Radio, RadioChangeEvent, Row, Space, Tag, theme } from 'antd';
import { FireOutlined, SettingFilled } from '@ant-design/icons'
import UseDrawerState from '../hooks/useDrawerState';
import useThemeStore from '../store/useThemeStore';
import ThemeItem from './ThemeItem';
import './index.css'
import { ThemeIconRoundedSolid } from '../icons/ThemeIcon2RoundedSolid';
import ThemeSetting from './themeSetting'
import { ThemeConfig } from '../theme-manager/theme-config'
import { themeConfig } from '../theme-manager/theme-manager';


const ThemeList = () => {
  const allThemes = useThemeStore((state: any) => state.allThemes)
  const drawerPosition = useThemeStore((state: any) => state.drawerPosition)
  const setDrawerPosition = useThemeStore((state: any) => state.setDrawerPosition)
  console.log('TestLog: ~ ThemeList ~ allThemes:', allThemes)
  const isThemeListPanelOpen = useThemeStore((state: any) => state.isThemeListPanelOpen)
  const showThemeListPanel = useThemeStore((state: any) => state.showThemeListPanel)
  const hideThemeListPanel = useThemeStore((state: any) => state.hideThemeListPanel)

  const onClose = () => {
    hideThemeListPanel()
  }

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

  const renderHeader = () => {
    const scrollTo = (id: string) => {
      const anchorEle = document.getElementById(id)
      anchorEle.scrollIntoView({ behavior: 'smooth' })
    }

    return <div className="headLinks">
      <Row>
        <Col>
          <Button type="primary"
            className="themeTag"
            onClick={() => {
              scrollTo('Light Themes')
            }}>
            Light
          </Button>
        </Col>
        <Col>
          <Button type="primary"
            className="themeTag"
            onClick={() => {
              scrollTo('Dark Themes')
            }}>
            Dark
          </Button>
        </Col>
      </Row>
    </div>
  }

  const renderThemeBlock = (allThemes: ThemeConfig[], themeTypeLabel: string, filterFunc: (themeConfig: ThemeConfig) => boolean) => {
    return <>
      <div className='sectionTitle'>
        <div id={themeTypeLabel}>{themeTypeLabel}</div>
      </div>
      <hr></hr>
      <div className='themeItemContainer'>
        {allThemes.filter(filterFunc).map((theme) => {
          return <ThemeItem themeConfig={theme} ></ThemeItem>
        })}
      </div>
    </>
  }

  console.log("THEMEsETTINGS initialized！")
  return <div className='dongyuhui'>
    {/* <Button
      icon={<FireOutlined />}
      onClick={() => showThemeListPanel()}
    >Power Themes</Button> */}
    <Drawer
      title={<>
        <ThemeIconRoundedSolid></ThemeIconRoundedSolid>
        <span className='drawerTitle'>Theme Cener</span>
      </>}
      extra={headerConfigButton()}
      size='large'
      placement={drawerPosition}
      closable={false}
      onClose={onClose}
      open={isThemeListPanelOpen}
      getContainer={false}
    >
      {renderHeader()}
      {renderThemeBlock(allThemes, 'Light Themes', theme => theme?.type === 'light')}
      {renderThemeBlock(allThemes, 'Dark Themes', theme => theme?.type === 'dark')}

    </Drawer>

  </div>
}

export default ThemeList