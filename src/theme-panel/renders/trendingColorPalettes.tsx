import React from 'react'

const TrendingColorPaletters = () => {
  return <>
    <div className="palette-card_info">
      <a className="link link--black palette-card_name"></a>
      <div className="palette-card_btns">
        <a className="link link--secondary palette-card_save-btn" data-tooltip="Save" style={{ display: 'flex' }}>
          <i className="icon icon-favorite-16px"></i>
          <span style={{ display: 'inline' }}>49.5K</span>
        </a>
        <a className="link link--secondary palette-card_more-btn">
          <i className="icon icon-dots-24px"></i>
        </a>
      </div>
    </div>
  </>
}

export default TrendingColorPaletters