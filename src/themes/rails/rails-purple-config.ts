import { ChangeEvent } from 'react';
import { findStyleRule, genColorSetting, genFontFamilySetting, genFontSizeSetting, genFontWeightSetting } from '../../utils/configUtil';

const themeName = '.rails-purple';

const primaryColorSetting = genColorSetting('Theme Primary Color', 'Select the primary color of your theme', themeName, '--primary-color', '#137cbd');
const s1Setting = genFontSizeSetting('S1', 'Select the font size for S1', themeName, '--s1');
const backgroundColorSetting = genColorSetting('Theme Background Color', 'Select the background color of your theme', themeName, '--background-color', '#e1e8ed');
const activeGraySetting = genColorSetting('Theme Active Gray', 'Select the active gray color of your theme', themeName, '--active-gray', '#d5dadf');
const rmAliasBackgroundColorSetting = genColorSetting('RM Alias Background Color', 'Select the background color for RM Alias', themeName, '--rm-alias__background-color', 'transparent');
const rmAliasColorSetting = genColorSetting('RM Alias Color', 'Select the color for RM Alias', themeName, '--rm-alias__color', '#d8ac11');
const rmAttrColorSetting = genColorSetting('RM Attr Color', 'Select the color for RM Attr', themeName, '--rm-attr__color', 'var(--rm-accent__color-font)');
const rmAttrFontWeightSetting = genFontWeightSetting('RM Attr Font Weight', 'Select the font weight for RM Attr', themeName, '--rm-attr__font-weight', '700');
const rmBlockEmbedBackgroundColorSetting = genColorSetting('RM Block Embed Background Color', 'Select the background color for RM Block Embed', themeName, '--rm-block-embed__background-color', '#d8ac6e0e');
const rmBlockEmbedBackgroundColorMarginActionSetting = genColorSetting('RM Block Embed Background Color Margin Action', 'Select the background color for RM Block Embed Margin Action', themeName, '--rm-block-embed__background-color_margin-action', 'var(--rm-blockquote__border_color)');
const rmBlockEmbedBorderLeftMarginActionSetting = genColorSetting('RM Block Embed Border Left Margin Action', 'Select the border left color for RM Block Embed Margin Action', themeName, '--rm-block-embed__border-left_margin-action', 'var(--rm-bullet-outline__border_hover)');
const rmBlockRefBackgroundColorSetting = genColorSetting('RM Block Ref Background Color', 'Select the background color for RM Block Ref', themeName, '--rm-block-ref__background-color', 'none');
const rmBlockRefBackgroundColorHoverSetting = genColorSetting('RM Block Ref Background Color Hover', 'Select the background color on hover for RM Block Ref', themeName, '--rm-block-ref__background-color_hover', '#111');
const rmBlockRefBorderBottomSetting = genColorSetting('RM Block Ref Border Bottom', 'Select the border color for RM Block Ref', themeName, '--rm-block-ref__border-bottom', 'rgba(254, 207, 43, 0.4)');
const rmBlockRefColorHoverSetting = genColorSetting('RM Block Ref Color Hover', 'Select the color on hover for RM Block Ref', themeName, '--rm-block-ref__color_hover', '#eb9854');
const rmBlockRefFontSizeSetting = genFontSizeSetting('RM Block Ref Font Size', 'Select the font size for RM Block Ref', themeName, '--rm-block-ref__font-size');
const rmBlockRefBackgroundColorInlineSetting = genColorSetting('RM Block Ref Background Color Inline', 'Select the background color inline for RM Block Ref', themeName, '--rm-block-ref__background-color_inline', 'rgba(33, 33, 33, 0.5)');
const rmBlockRefBorderLeftInlineSetting = genColorSetting('RM Block Ref Border Left Inline', 'Select the border left color inline for RM Block Ref', themeName, '--rm-block-ref__border-left_inline', 'var(--rm-blockquote__border_color)');
const rmBlockquoteBackgroundColorSetting = genColorSetting('RM Blockquote Background Color', 'Select the background color for RM Blockquote', themeName, '--rm-blockquote__background-color', 'none');
const rmBlockquoteBorderColorSetting = genColorSetting('RM Blockquote Border Color', 'Select the border color for RM Blockquote', themeName, '--rm-blockquote__border_color', '#30404d');
const rmBlockquoteBorderLeftSetting = genColorSetting('RM Blockquote Border Left', 'Select the border left color for RM Blockquote', themeName, '--rm-blockquote__border-left', '5px solid');
const rmBlockquoteColorSetting = genColorSetting('RM Blockquote Color', 'Select the color for RM Blockquote', themeName, '--rm-blockquote__color', 'rgba(109, 156, 190, 0.89)');
const rmBlockquoteFontSizeSetting = genFontSizeSetting('RM Blockquote Font Size', 'Select the font size for RM Blockquote', themeName, '--rm-blockquote__font-size');
const rmBlockquoteTextAlignSetting = genColorSetting('RM Blockquote Text Align', 'Select the text align for RM Blockquote', themeName, '--rm-blockquote__text-align', 'justify');
const rmBlockquoteTextJustifySetting = genColorSetting('RM Blockquote Text Justify', 'Select the text justify for RM Blockquote', themeName, '--rm-blockquote__text-justify', 'inter-word');
const rmCodeBackgroundSetting = genColorSetting('RM Code Background', 'Select the background color for RM Code', themeName, '--rm-code__background', '#002b36');
const rmCodeBackgroundGutterSetting = genColorSetting('RM Code Background Gutter', 'Select the background color for RM Code Gutter', themeName, '--rm-code__background_gutter', '#073642');
const rmCodeFontColorSetting = genColorSetting('RM Code Font Color', 'Select the font color for RM Code', themeName, '--rm-code-font__color', '#6d9cbe');
const rmCodeFontFontFamilySetting = genFontFamilySetting('RM Code Font Font Family', 'Select the font family for RM Code Font', themeName, '--rm-code-font__font-family');
const rmCodeFontFontSizeSetting = genFontSizeSetting('RM Code Font Font Size', 'Select the font size for RM Code Font', themeName, '--rm-code-font__font-size');
const rmCodeFontWeightSetting = genFontWeightSetting('RM Code Font Weight', 'Select the font weight for RM Code Font', themeName, '--rm-code-font__font-weight', '400');
const rmCodeLineHeightSetting = genFontSizeSetting('RM Code Line Height', 'Select the line height for RM Code', themeName, '--rm-code__line-height');
const rmH1FontSizeSetting = genFontSizeSetting('RM H1 Font Size', 'Select the font size for RM H1', themeName, '--rm-h1__font-size');
const rmH2FontSizeSetting = genFontSizeSetting('RM H2 Font Size', 'Select the font size for RM H2', themeName, '--rm-h2__font-size');
const rmH3FontSizeSetting = genFontSizeSetting('RM H3 Font Size', 'Select the font size for RM H3', themeName, '--rm-h3__font-size');
const rmH4FontSizeSetting = genFontSizeSetting('RM H4 Font Size', 'Select the font size for RM H4', themeName, '--rm-h4__font-size');
const rmH5FontSizeSetting = genFontSizeSetting('RM H5 Font Size', 'Select the font size for RM H5', themeName, '--rm-h5__font-size');
const rmH6FontSizeSetting = genFontSizeSetting('RM H6 Font Size', 'Select the font size for RM H6', themeName, '--rm-h6__font-size');
const rmLinkColorSetting = genColorSetting('RM Link Color', 'Select the color for RM Link', themeName, '--rm-link__color', 'var(--rm-accent__color-font)');
const rmLinkColorHoverSetting = genColorSetting('RM Link Color Hover', 'Select the color on hover for RM Link', themeName, '--rm-link__color_hover', 'var(--rm-accent__color-font)');
const rmLinkUnderlineSetting = genColorSetting('RM Link Underline', 'Select the underline color for RM Link', themeName, '--rm-link__underline', 'rgba(171, 205, 239, 0.5)');
const rmTableBorderColorSetting = genColorSetting('RM Table Border Color', 'Select the border color for RM Table', themeName, '--rm-table__border_color', 'rgba(176, 196, 222, 0.3)');
const rmTableCellPaddingSetting = genFontSizeSetting('RM Table Cell Padding', 'Select the padding for RM Table Cell', themeName, '--rm-table__cell_padding');
const rmTableCellPaddingXSetting = genFontSizeSetting('RM Table Cell Padding X', 'Select the horizontal padding for RM Table Cell', themeName, '--rm-table__cell_padding-x');
const rmTableCellPaddingYSetting = genFontSizeSetting('RM Table Cell Padding Y', 'Select the vertical padding for RM Table Cell', themeName, '--rm-table__cell_padding-y');
const rmTableHeaderBackgroundColorSetting = genColorSetting('RM Table Header Background Color', 'Select the background color for RM Table Header', themeName, '--rm-table-header__background-color', 'rgba(33, 33, 33, 0.9)');
const rmTableHeaderBorderColorSetting = genColorSetting('RM Table Header Border Color', 'Select the border color for RM Table Header', themeName, '--rm-table-header__border_color', 'rgba(176, 196, 222, 0.3)');
const rmTableHeaderFontColorSetting = genColorSetting('RM Table Header Font Color', 'Select the font color for RM Table Header', themeName, '--rm-table-header__font-color', 'rgba(109, 156, 190, 0.9)');
const rmTableRowBackgroundColorSetting = genColorSetting('RM Table Row Background Color', 'Select the background color for RM Table Row', themeName, '--rm-table-row__background-color', 'rgba(176, 196, 222, 0.1)');
const rmTableRowBackgroundColorHoverSetting = genColorSetting('RM Table Row Background Color Hover', 'Select the background color on hover for RM Table Row', themeName, '--rm-table-row__background-color_hover', 'rgba(176, 196, 222, 0.2)');
const rmTableRowBorderColorSetting = genColorSetting('RM Table Row Border Color', 'Select the border color for RM Table Row', themeName, '--rm-table-row__border_color', 'rgba(176, 196, 222, 0.3)');
const rmTableRowColorHoverSetting = genColorSetting('RM Table Row Color Hover', 'Select the color on hover for RM Table Row', themeName, '--rm-table-row__color_hover', 'rgba(109, 156, 190, 0.9)');
const rmVideoControlBackgroundColorSetting = genColorSetting('RM Video Control Background Color', 'Select the background color for RM Video Control', themeName, '--rm-video-control__background-color', 'rgba(33, 33, 33, 0.5)');
const rmVideoControlBackgroundHoverColorSetting = genColorSetting('RM Video Control Background Hover Color', 'Select the background hover color for RM Video Control', themeName, '--rm-video-control__background-hover-color', 'rgba(33, 33, 33, 0.8)');
const rmVideoControlButtonColorSetting = genColorSetting('RM Video Control Button Color', 'Select the button color for RM Video Control', themeName, '--rm-video-control__button-color', '#ffffff');
const rmVideoControlButtonHoverColorSetting = genColorSetting('RM Video Control Button Hover Color', 'Select the button hover color for RM Video Control', themeName, '--rm-video-control__button-hover-color', '#ffcc00');
const rmVideoControlIconColorSetting = genColorSetting('RM Video Control Icon Color', 'Select the icon color for RM Video Control', themeName, '--rm-video-control__icon-color', '#ffffff');
const rmVideoControlIconHoverColorSetting = genColorSetting('RM Video Control Icon Hover Color', 'Select the icon hover color for RM Video Control', themeName, '--rm-video-control__icon-hover-color', '#ffcc00');
const rmVideoControlSliderColorSetting = genColorSetting('RM Video Control Slider Color', 'Select the slider color for RM Video Control', themeName, '--rm-video-control__slider-color', '#ffcc00');
const rmVideoControlSliderHoverColorSetting = genColorSetting('RM Video Control Slider Hover Color', 'Select the slider hover color for RM Video Control', themeName, '--rm-video-control__slider-hover-color', '#ffffff');
const rmVideoControlSliderThumbColorSetting = genColorSetting('RM Video Control Slider Thumb Color', 'Select the slider thumb color for RM Video Control', themeName, '--rm-video-control__slider-thumb-color', '#ffffff');
const rmVideoControlSliderThumbHoverColorSetting = genColorSetting('RM Video Control Slider Thumb Hover Color', 'Select the slider thumb hover color for RM Video Control', themeName, '--rm-video-control__slider-thumb-hover-color', '#ffcc00');

const railsPurpleThemeSettings = [
  primaryColorSetting,
  s1Setting,
  backgroundColorSetting,
  activeGraySetting,
  rmAliasBackgroundColorSetting,
  rmAliasColorSetting,
  rmAttrColorSetting,
  rmAttrFontWeightSetting,
  rmBlockEmbedBackgroundColorSetting,
  rmBlockEmbedBackgroundColorMarginActionSetting,
  rmBlockEmbedBorderLeftMarginActionSetting,
  rmBlockRefBackgroundColorSetting,
  rmBlockRefBackgroundColorHoverSetting,
  rmBlockRefBorderBottomSetting,
  rmBlockRefColorHoverSetting,
  rmBlockRefFontSizeSetting,
  rmBlockRefBackgroundColorInlineSetting,
  rmBlockRefBorderLeftInlineSetting,
  rmBlockquoteBackgroundColorSetting,
  rmBlockquoteBorderColorSetting,
  rmBlockquoteBorderLeftSetting,
  rmBlockquoteColorSetting,
  rmBlockquoteFontSizeSetting,
  rmBlockquoteTextAlignSetting,
  rmBlockquoteTextJustifySetting,
  rmCodeBackgroundSetting,
  rmCodeBackgroundGutterSetting,
  rmCodeFontColorSetting,
  rmCodeFontFontFamilySetting,
  rmCodeFontFontSizeSetting,
  rmCodeFontWeightSetting,
  rmCodeLineHeightSetting,
  rmH1FontSizeSetting,
  rmH2FontSizeSetting,
  rmH3FontSizeSetting,
  rmH4FontSizeSetting,
  rmH5FontSizeSetting,
  rmH6FontSizeSetting,
  rmLinkColorSetting,
  rmLinkColorHoverSetting,
  rmLinkUnderlineSetting,
  rmTableBorderColorSetting,
  rmTableCellPaddingSetting,
  rmTableCellPaddingXSetting,
  rmTableCellPaddingYSetting,
  rmTableHeaderBackgroundColorSetting,
  rmTableHeaderBorderColorSetting,
  rmTableHeaderFontColorSetting,
  rmTableRowBackgroundColorSetting,
  rmTableRowBackgroundColorHoverSetting,
  rmTableRowBorderColorSetting,
  rmTableRowColorHoverSetting,
  rmVideoControlBackgroundColorSetting,
  rmVideoControlBackgroundHoverColorSetting,
  rmVideoControlButtonColorSetting,
  rmVideoControlButtonHoverColorSetting,
  rmVideoControlIconColorSetting,
  rmVideoControlIconHoverColorSetting,
  rmVideoControlSliderColorSetting,
  rmVideoControlSliderHoverColorSetting,
  rmVideoControlSliderThumbColorSetting,
  rmVideoControlSliderThumbHoverColorSetting,
];

const loadRailsPurpleThemeSettings = () => {
  railsPurpleThemeSettings.forEach(setting => {
    findStyleRule(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  loadRailsPurpleThemeSettings,
  railsPurpleThemeSettings
}

