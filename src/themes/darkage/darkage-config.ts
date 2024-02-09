import { ChangeEvent } from 'react';
import { findStyleRuleWithCallBack, genColorSetting, genFontFamilySetting, genFontSizeSetting } from '../../utils/configUtil';

const themeName = '.darkage';

const globalFontSetting = genFontFamilySetting('Global Font', 'Select the global font for your theme', themeName, '--global-font');
const secondaryFontSetting = genFontFamilySetting('Secondary Font', 'Select the secondary font for your theme', themeName, '--secondary-font');
const reducePaddingRightSetting = genFontSizeSetting('Reduce Padding Right', 'Adjust the padding on the right side of blocks', themeName, '--reduce-padding-right');
const reducePaddingLeftSetting = genFontSizeSetting('Reduce Padding Left', 'Adjust the padding on the left side of blocks', themeName, '--reduce-padding-left');
const pageLinksColorSetting = genColorSetting('Page Links Color', 'Select the color for page links', themeName, '--page-links', '#D5A979');
const attributesColorSetting = genColorSetting('Attributes Color', 'Select the color for attributes', themeName, '--attributes-color', '#CEA2A1');
const externalLinksColorSetting = genColorSetting('External Links Color', 'Select the color for external links', themeName, '--external-links', '#53A6C8');
const linksHoverColorSetting = genColorSetting('Links Hover Color', 'Select the hover color for links', themeName, '--links-hover', '#EE8443');
const hashtagsColorSetting = genColorSetting('Hashtags Color', 'Select the color for hashtags', themeName, '--hashtags', '#FFFFFF84');
const bodyTextColorSetting = genColorSetting('Body Text Color', 'Select the color for body text', themeName, '--body-text', '#FFFFFFB2');
const italicsColorSetting = genColorSetting('Italics Color', 'Select the color for italicized text', themeName, '--italics-color', '#FFFFFFB2');
const boldColorSetting = genColorSetting('Bold Color', 'Select the color for bolded text', themeName, '--bold-color', '#FFFFFFB2');
const highlightTextColorSetting = genColorSetting('Highlight Text Color', 'Select the color for highlighted text', themeName, '--highlight-text-color', '#d8dadb');
const highlighterColorSetting = genColorSetting('Highlighter Color', 'Select the color for highlighter', themeName, '--highlighter', '#3b5e39');
const backgroundColorSetting = genColorSetting('Background Color', 'Select the main page background color', themeName, '--background', '#26272a');
const sidebarBackgroundColorSetting = genColorSetting('Sidebar Background Color', 'Select the sidebar background color', themeName, '--sidebar-background', '#1E1E1E');
const sidebarTextColorSetting = genColorSetting('Sidebar Text Color', 'Select the color for sidebar text', themeName, '--sidebar-text', '#FFFFFFB2');
const pageHeadingColorSetting = genColorSetting('Page Heading Color', 'Select the color for page headings', themeName, '--page-heading', '#FFFFFFB2');
const dailyHeadingColorSetting = genColorSetting('Daily Heading Color', 'Select the color for daily notes date heading', themeName, '--daily-heading', '#FFFFFFB2');
const headingsColorSetting = genColorSetting('Headings Color', 'Select the color for h1, h2, h3', themeName, '--headings', '#FFFFFFB2');
const bulletsColorSetting = genColorSetting('Bullets Color', 'Select the color for bullets', themeName, '--bullets', '#394b59');
const closedBulletsColorSetting = genColorSetting('Closed Bullets Color', 'Select the color for closed bullets', themeName, '--closed-bullets', '#FFFFFF7C');
const referencesColorSetting = genColorSetting('References Color', 'Select the color for reference underline', themeName, '--references', '#A3B47D');
const referenceUnderlineSetting = genFontSizeSetting('Reference Underline', 'Set the thickness of the underline beneath reference', themeName, '--reference-underline');
const referenceBorderSetting = genFontSizeSetting('Reference Border', 'Set the width of the border around reference number indicator', themeName, '--reference-border');
const blockReferenceTextColorSetting = genColorSetting('Block Reference Text Color', 'Select the color for block reference text', themeName, '--block-reference-text', '#A3B47D');
const namespacesColorSetting = genColorSetting('Namespaces Color', 'Select the color for namespaces', themeName, '--namespaces', '#1CD247');
const allPagesMentionsColorSetting = genColorSetting('All Pages Mentions Color', 'Select the color for mentions pill on All Pages', themeName, '--all-pages-mentions', '#F79A18');
const cursorColorSetting = genColorSetting('Cursor Color', 'Select the color for cursor', themeName, '--cursor', '#FFFFFF');
const iconsColorSetting = genColorSetting('Icons Color', 'Select the color for icons', themeName, '--icons', '#13744c');
const iconsHoverColorSetting = genColorSetting('Icons Hover Color', 'Select the hover color for icons', themeName, '--icons-hover', '#a06427');
const filterIconColorSetting = genColorSetting('Filter Icon Color', 'Select the color for filter icon', themeName, '--filter-icon', '#FF0000');
const mainFontSizeSetting = genFontSizeSetting('Main Font Size', 'Set the main font size', themeName, '--main-font-size');
const pageHeadFontSizeSetting = genFontSizeSetting('Page Heading Font Size', 'Set the font size for page headings', themeName, '--page-head-font-size');
const h1FontSizeSetting = genFontSizeSetting('H1 Font Size', 'Set the font size for h1', themeName, '--h1-font-size');
const h2FontSizeSetting = genFontSizeSetting('H2 Font Size', 'Set the font size for h2', themeName, '--h2-font-size');
const h3FontSizeSetting = genFontSizeSetting('H3 Font Size', 'Set the font size for h3', themeName, '--h3-font-size');
const sidebarH1SizeSetting = genFontSizeSetting('Sidebar H1 Size', 'Set the font size for sidebar page headings', themeName, '--sidebar-h1-size');
const dropdownMenuBackgroundColorSetting = genColorSetting('Dropdown Menu Background Color', 'Select the background color for dropdown menus', themeName, '--dropdown-menu-background', '#464545');
const dropdownMenuHighlightColorSetting = genColorSetting('Dropdown Menu Highlight Color', 'Select the highlight color for dropdown menu items', themeName, '--dropdown-menu-highlight', '#3e3d3d');
const dropdownMenuTextColorSetting = genColorSetting('Dropdown Menu Text Color', 'Select the text color in dropdown menus', themeName, '--dropdown-menu-text', '#FFFFFFB2');
const dropdownNewpageColorSetting = genColorSetting('Dropdown Newpage Color', 'Select the color for newpage in dropdown menu', themeName, '--dropdown-newpage', '#1AD546');
const searchBarBackgroundColorSetting = genColorSetting('Search Bar Background Color', 'Select the background color for search bar', themeName, '--search-bar-background', '#26272a');
const searchBarTextColorSetting = genColorSetting('Search Bar Text Color', 'Select the text color for search bar', themeName, '--search-bar-text', '#FFFFFF');
const kanbanMainBackgroundColorSetting = genColorSetting('Kanban Main Background Color', 'Select the main background color for Kanban', themeName, '--kanban-main-background', '#2b2a2a');
const kanbanColumnBackgroundColorSetting = genColorSetting('Kanban Column Background Color', 'Select the column background color for Kanban', themeName, '--kanban-column-background', '#2b2a2a');
const kanbanCardBackgroundColorSetting = genColorSetting('Kanban Card Background Color', 'Select the card background color for Kanban', themeName, '--kanban-card-background', '#5959591c');
const kanbanTextHoverColorSetting = genColorSetting('Kanban Text Hover Color', 'Select the hover color for Kanban text', themeName, '--kanban-text-hover', '#00ee6b');

const darkageThemeSettings = [
  globalFontSetting,
  secondaryFontSetting,
  reducePaddingRightSetting,
  reducePaddingLeftSetting,
  pageLinksColorSetting,
  attributesColorSetting,
  externalLinksColorSetting,
  linksHoverColorSetting,
  hashtagsColorSetting,
  bodyTextColorSetting,
  italicsColorSetting,
  boldColorSetting,
  highlightTextColorSetting,
  highlighterColorSetting,
  backgroundColorSetting,
  sidebarBackgroundColorSetting,
  sidebarTextColorSetting,
  pageHeadingColorSetting,
  dailyHeadingColorSetting,
  headingsColorSetting,
  bulletsColorSetting,
  closedBulletsColorSetting,
  referencesColorSetting,
  referenceUnderlineSetting,
  referenceBorderSetting,
  blockReferenceTextColorSetting,
  namespacesColorSetting,
  allPagesMentionsColorSetting,
  cursorColorSetting,
  iconsColorSetting,
  iconsHoverColorSetting,
  filterIconColorSetting,
  mainFontSizeSetting,
  pageHeadFontSizeSetting,
  h1FontSizeSetting,
  h2FontSizeSetting,
  h3FontSizeSetting,
  sidebarH1SizeSetting,
  dropdownMenuBackgroundColorSetting,
  dropdownMenuHighlightColorSetting,
  dropdownMenuTextColorSetting,
  dropdownNewpageColorSetting,
  searchBarBackgroundColorSetting,
  searchBarTextColorSetting,
  kanbanMainBackgroundColorSetting,
  kanbanColumnBackgroundColorSetting,
  kanbanCardBackgroundColorSetting,
  kanbanTextHoverColorSetting,
];

const loadDarkageThemeSettings = () => {
  darkageThemeSettings.forEach(setting => {
    findStyleRuleWithCallBack(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  darkageThemeSettings,
  loadDarkageThemeSettings
}
