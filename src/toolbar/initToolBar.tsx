import ReactDOM from 'react-dom';
import React from 'react';
import { Button, Tooltip } from "@blueprintjs/core";
import SideBarButton from '../sidebar/sideBarButton';
import ToolBarButton from './toolBarButton';


export const initToolBar = () => {
  const target = document.querySelector('.rm-find-or-create-wrapper');
  const el = document.createElement('div');
  ReactDOM.render(
    <ToolBarButton />,
    el
  );

  target.parentNode.insertBefore(el, target.nextSibling);
};
