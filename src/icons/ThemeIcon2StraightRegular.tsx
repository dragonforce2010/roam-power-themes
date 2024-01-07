import Icon from '@ant-design/icons'
import React from 'react'

const ThemeIconSvg = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={"16px"} height={"16px"}><g id="_01_align_center" data-name="01 align center"><circle cx="17.5" cy="9.5" r="1.5" /><circle cx="12.5" cy="6.5" r="1.5" /><circle cx="7.5" cy="9.5" r="1.5" /><circle cx="7.5" cy="15.5" r="1.5" /><path d="M12.083,24A12,12,0,0,1,3.745,3.371,11.885,11.885,0,0,1,12.5.007,12.155,12.155,0,0,1,24.08,11.7a11.924,11.924,0,0,1-.775,4.552,1.888,1.888,0,0,1-1.377,1.177,1.912,1.912,0,0,1-1.769-.521l-.1-.1a3.567,3.567,0,0,0-6.089,2.553l.04,4.516-.924.077C12.753,23.978,12.421,24,12.083,24Zm0-22a10,10,0,0,0-.09,20l-.024-2.625A5.6,5.6,0,0,1,13.6,15.39h0a5.57,5.57,0,0,1,7.872,0l.014.014a9.892,9.892,0,0,0,.595-3.655,10.127,10.127,0,0,0-9.645-9.743C12.317,2,12.2,2,12.082,2Z" /></g></svg>
);

const ThemeIcon2StraightRegular = (props: any) => (
  <Icon component={ThemeIconSvg} {...props} />
);

export {
  ThemeIcon2StraightRegular
}