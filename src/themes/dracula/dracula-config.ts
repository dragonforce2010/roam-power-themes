import { findStyleRule, genColorSetting } from '../../utils/configUtil';

const themeName = '.dracula';

const blueColorSetting = genColorSetting('Dracula Blue Color', 'Select the blue color for Dracula theme', themeName, '--blue', '#8be9fd');
const greenColorSetting = genColorSetting('Dracula Green Color', 'Select the green color for Dracula theme', themeName, '--green', '#50fa7b');
const orangeColorSetting = genColorSetting('Dracula Orange Color', 'Select the orange color for Dracula theme', themeName, '--orange', '#ffb86c');
const pinkColorSetting = genColorSetting('Dracula Pink Color', 'Select the pink color for Dracula theme', themeName, '--pink', '#ff79c6');
const purpleColorSetting = genColorSetting('Dracula Purple Color', 'Select the purple color for Dracula theme', themeName, '--purple', '#bd93f9');
const redColorSetting = genColorSetting('Dracula Red Color', 'Select the red color for Dracula theme', themeName, '--red', '#ff5555');
const yellowColorSetting = genColorSetting('Dracula Yellow Color', 'Select the yellow color for Dracula theme', themeName, '--yellow', '#f1fa8c');
const backgroundColorSetting = genColorSetting('Dracula Background Color', 'Select the background color for Dracula theme', themeName, '--background', '#282a36');
const currentLineColorSetting = genColorSetting('Dracula Current Line Color', 'Select the current line color for Dracula theme', themeName, '--current-line', '#44475a');
const foregroundColorSetting = genColorSetting('Dracula Foreground Color', 'Select the foreground color for Dracula theme', themeName, '--foreground', '#f8f8f2');
const commentColorSetting = genColorSetting('Dracula Comment Color', 'Select the comment color for Dracula theme', themeName, '--comment', '#6272a4');
const darkBlueColorSetting = genColorSetting('Dracula Dark Blue Color', 'Select the dark blue color for Dracula theme', themeName, '--dark-blue', '#29454b');
const darkYellowColorSetting = genColorSetting('Dracula Dark Yellow Color', 'Select the dark yellow color for Dracula theme', themeName, '--dark-yellow', '#606438');
const background2ColorSetting = genColorSetting('Dracula Background 2 Color', 'Select the second background color for Dracula theme', themeName, '--background2', '#333545');
const foreground2ColorSetting = genColorSetting('Dracula Foreground 2 Color', 'Select the second foreground color for Dracula theme', themeName, '--foreground2', '#bdcad4');
const searchInputColorSetting = genColorSetting('Dracula Search Input Color', 'Select the search input color for Dracula theme', themeName, '--search-input', '#e4e9ed');
const searchHoverColorSetting = genColorSetting('Dracula Search Hover Color', 'Select the search hover color for Dracula theme', themeName, '--search-hover', '#d5dadf');
const bulletOuterColorSetting = genColorSetting('Dracula Bullet Outer Color', 'Select the bullet outer color for Dracula theme', themeName, '--bullet-outer', '#6c6f75');
const bulletInnerColorSetting = genColorSetting('Dracula Bullet Inner Color', 'Select the bullet inner color for Dracula theme', themeName, '--bullet-inner', '#d8dee9');
const columnTitleColorSetting = genColorSetting('Dracula Column Title Color', 'Select the column title color for Dracula theme', themeName, '--column-title', '#818d9b');

const draculaThemeSettings = [
  blueColorSetting,
  greenColorSetting,
  orangeColorSetting,
  pinkColorSetting,
  purpleColorSetting,
  redColorSetting,
  yellowColorSetting,
  backgroundColorSetting,
  currentLineColorSetting,
  foregroundColorSetting,
  commentColorSetting,
  darkBlueColorSetting,
  darkYellowColorSetting,
  background2ColorSetting,
  foreground2ColorSetting,
  searchInputColorSetting,
  searchHoverColorSetting,
  bulletOuterColorSetting,
  bulletInnerColorSetting,
  columnTitleColorSetting,
];


const loadDraculaThemeSettings = () => {
  draculaThemeSettings.forEach(setting => {
    findStyleRule(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
};

export {
  draculaThemeSettings,
  loadDraculaThemeSettings
};
