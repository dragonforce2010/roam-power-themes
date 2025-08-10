import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import useThemeStore from '../store/useThemeStore';
import { ConfigItem, ThemeConfig } from '../theme-manager/theme-config';
import { findStyleRuleWithCallBack } from '../utils/configUtil';
import { combineThemeStyleProperties, loadAndApplyThemeStyleProperties } from '../theme-manager/theme-manager';

interface ThemeItemProps {
  themeConfig: ThemeConfig
}

const ThemeItem: React.FC<ThemeItemProps> = ({
  themeConfig
}) => {
  const [prevTheme, setPrevTheme] = useState<string>()
  const [isSelectTheme, setIsSelectTheme] = useState<boolean>(false)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [imageError, setImageError] = useState<boolean>(false)
  const [retryCount, setRetryCount] = useState<number>(0)
  const setCurrentTheme = useThemeStore((state: any) => state.setCurrentTheme)
  const currentTheme = useThemeStore((state: any) => state.currentTheme)
  const showThemeSettingPannel = useThemeStore((state: any) => state.showThemeSettingPannel)
  const isThemeSettingPannelOpen = useThemeStore((state: any) => state.isThemeSettingPannelOpen);

  const loadAndApplyTheme = () => {
    // setCurrentTheme({})

    // console.log('TestLog: ~ 点击准备apply theme config:', themeConfig)
    const latestThemeConfig = loadAndApplyThemeStyleProperties(themeConfig)
    // console.log('TestLog: ~ 设置currentTheme:', themeConfig)
    setCurrentTheme(latestThemeConfig)
    // console.log('currentTheme', latestThemeConfig)
    setIsSelectTheme(!isSelectTheme)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(false)
    
    // 自动重试机制，最多重试2次
    if (retryCount < 2) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1)
        setImageError(false)
        // 强制重新加载图片，添加时间戳避免缓存
        const img = document.querySelector(`img[data-theme="${themeConfig.name}"]`) as HTMLImageElement
        if (img && themeConfig.coverUrl) {
          const separator = themeConfig.coverUrl.includes('?') ? '&' : '?'
          img.src = `${themeConfig.coverUrl}${separator}_t=${Date.now()}`
        }
      }, 1000 * (retryCount + 1)) // 递增延迟：1s, 2s, 3s
    }
  }

  // 重置状态当主题配置改变时
  useEffect(() => {
    setImageLoaded(false)
    setImageError(false)
    setRetryCount(0)
  }, [themeConfig.coverUrl])

  const renderCoverImage = () => {
    if (!themeConfig.coverUrl) {
      return (
        <div 
          style={{ 
            height: '160px', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {themeConfig.label}
        </div>
      )
    }

    return (
      <>
        <img 
          alt={themeConfig.label}
          data-theme={themeConfig.name}
          src={themeConfig.coverUrl}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            display: imageError ? 'none' : 'block',
            transition: 'opacity 0.3s ease',
            opacity: imageLoaded ? 1 : 0.7
          }}
        />
        {imageError && (
          <div 
            style={{ 
              height: '160px', 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              padding: '20px',
              textAlign: 'center'
            }}
          >
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              {themeConfig.label}
            </div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>
              {retryCount >= 2 ? 'Image failed to load' : 'Loading...'}
            </div>
          </div>
        )}
      </>
    )
  }

  return <>
    <Card
      className={`themeCard ${currentTheme.name === themeConfig.name ? 'selectedTheme' : ''}`}
      // className={`themeCard`}
      hoverable
      bordered={false}
      style={{ width: 240, border: 'none' }}
      cover={renderCoverImage()}
      onClick={loadAndApplyTheme}
    // onMouseEnter={() => {
    //   if (isSelectTheme)
    //     return
    //   const currTheme = getCurrentTheme()
    //   setPrevTheme(currTheme)
    //   updateTheme(name)
    // }}

    // onMouseLeave={() => {
    //   if (isSelectTheme)
    //     return
    //   updateTheme(prevTheme)
    // }}
    >
      <div className='cardFooter'>
        <Meta title={themeConfig.label} description={currentTheme.name === themeConfig.name ? 'Current' : ''} />
        <Button
          type='primary'
          onClick={() => {
            loadAndApplyTheme()
            showThemeSettingPannel()
            console.log('设置setting pannel to open')
          }}
        >Settings</Button>
      </div>
    </Card>
  </>

}

export default ThemeItem