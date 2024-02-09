import React from 'react';
import ReactDOM from 'react-dom';
import ThemeList from './themeList';

export const initThemeListPanel = () => {
  const body = document.querySelector('.roam-body ')
  const el = document.createElement('div');

  ReactDOM.render(<ThemeList></ThemeList>, el)
  

  body.appendChild(el)
};
