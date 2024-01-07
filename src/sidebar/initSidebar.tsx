import ReactDOM from 'react-dom';
import React from 'react';
import { Button, Tooltip } from "@blueprintjs/core";
import SideBarButton from './sideBarButton';


export const initSidebar = () => {
  // const menu = document.querySelector('.roam-sidebar-content');
  const target = document.querySelector('.rm-left-sidebar__all-pages');
  const el = document.createElement('div');
  ReactDOM.render(
    <SideBarButton />,
    el
  );

  target.parentNode.insertBefore(el, target.nextSibling);
};
