import React from 'react';
import ReactDOM from 'react-dom';
import ThemeSettings from './themeSettings';

export const initThemeSettingPanel = () => {
  const body = document.querySelector('.roam-body ')
  const el = document.createElement('div');

  ReactDOM.render(<ThemeSettings></ThemeSettings>, el)

  body.appendChild(el)
};
