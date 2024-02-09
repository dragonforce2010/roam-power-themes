import React from 'react'
import ReactDOM from 'react-dom'
import ThemeSetting from './themeSetting'

export const initThemeSettingPanel = () => {
  const body = document.querySelector('.roam-body')
  const el = document.createElement('div')

  ReactDOM.render(<ThemeSetting />, el)

  body.appendChild(el)
}