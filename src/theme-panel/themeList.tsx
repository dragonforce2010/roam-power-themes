import React, { useState } from 'react';
import { Button, Col, Drawer, Row, Tag, theme } from 'antd';
import { FireOutlined } from '@ant-design/icons'
import UseDrawerState from '../hooks/useDrawerState';
import useThemeStore from '../store/useThemeStore';
import ThemeItem from './ThemeItem';
import './index.css'
import { ThemeIconRoundedSolid } from '../icons/ThemeIcon2RoundedSolid';
import ThemeSetting from './themeSetting'


const ThemeList = () => {
  const allThemes = useThemeStore((state: any) => state.allThemes)
  const isThemeListPanelOpen = useThemeStore((state: any) => state.isThemeListPanelOpen)
  const showThemeListPanel = useThemeStore((state: any) => state.showThemeListPanel)
  const hideThemeListPanel = useThemeStore((state: any) => state.hideThemeListPanel)

  const onClose = () => {
    hideThemeListPanel()
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

  const renderThemeBlock = (allThemes: any[], themeType: string, filterFunc: (e: any) => boolean) => {
    return <>
      <div className='sectionTitle'>
        <div id={themeType}>{themeType}</div>
      </div>
      <hr></hr>
      <div className='themeItemContainer'>
        {allThemes.filter(filterFunc).map((theme: any) => {
          return <ThemeItem label={theme.label} name={theme.name} cover={theme.cover}></ThemeItem>
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
      size='large'
      placement="right"
      closable={false}
      onClose={onClose}
      open={isThemeListPanelOpen}
      getContainer={false}
    >
      {/* <HeadLinks></HeadLinks> */}
      {renderHeader()}
      {renderThemeBlock(allThemes, 'Light Themes', theme => theme.label.toLowerCase().indexOf('dark') == -1)}
      {renderThemeBlock(allThemes, 'Dark Themes', theme => theme.label.toLowerCase().indexOf('dark') != -1)}

    </Drawer>

  </div>
}

export default ThemeList