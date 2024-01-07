import ReactDOM from 'react-dom';
import React from 'react';
import { Button, Tooltip } from "@blueprintjs/core";
import SideBarButton from './sideBarButton';
import { extension_helper } from '../helper/extension-helper';


export const initSidebar = () => {
  const target = document.querySelector('.rm-left-sidebar__all-pages');
  const el = document.createElement('div');
  ReactDOM.render(
    <SideBarButton />,
    el
  );

  target.parentNode.insertBefore(el, target.nextSibling);

  extension_helper.on_uninstall(() => {
    ReactDOM.unmountComponentAtNode(el);
    el.parentElement.removeChild(el);
  });
};
