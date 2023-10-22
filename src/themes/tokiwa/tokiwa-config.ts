import { ChangeEvent } from 'react';
import { findStyleRule, genColorSetting } from '../../utils/configUtil';

const themeName = '.tokiwa';

const backgroundColorSetting = genColorSetting('Theme Background Color', 'Select the background color of your theme', themeName, '--background-color', '#f7fafc');
const eucalyptus100Setting = genColorSetting('Theme Eucalyptus 100', 'Select the color of eucalyptus 100 in your theme', themeName, '--eucalyptus-100', '#e6f3ef');
const eucalyptus200Setting = genColorSetting('Theme Eucalyptus 200', 'Select the color of eucalyptus 200 in your theme', themeName, '--eucalyptus-200', '#c0e1d7');
const eucalyptus300Setting = genColorSetting('Theme Eucalyptus 300', 'Select the color of eucalyptus 300 in your theme', themeName, '--eucalyptus-300', '#9acfbf');
const eucalyptus400Setting = genColorSetting('Theme Eucalyptus 400', 'Select the color of eucalyptus 400 in your theme', themeName, '--eucalyptus-400', '#4eab90');
const eucalyptus500Setting = genColorSetting('Theme Eucalyptus 500', 'Select the color of eucalyptus 500 in your theme', themeName, '--eucalyptus-500', '#028760');
const eucalyptus600Setting = genColorSetting('Theme Eucalyptus 600', 'Select the color of eucalyptus 600 in your theme', themeName, '--eucalyptus-600', '#027a56');
const eucalyptus700Setting = genColorSetting('Theme Eucalyptus 700', 'Select the color of eucalyptus 700 in your theme', themeName, '--eucalyptus-700', '#01513a');
const eucalyptus800Setting = genColorSetting('Theme Eucalyptus 800', 'Select the color of eucalyptus 800 in your theme', themeName, '--eucalyptus-800', '#013d2b');
const eucalyptus900Setting = genColorSetting('Theme Eucalyptus 900', 'Select the color of eucalyptus 900 in your theme', themeName, '--eucalyptus-900', '#01291d');
const java100Setting = genColorSetting('Theme Java 100', 'Select the color of java 100 in your theme', themeName, '--java-100', '#edf9f8');
const java200Setting = genColorSetting('Theme Java 200', 'Select the color of java 200 in your theme', themeName, '--java-200', '#d2efed');
const java300Setting = genColorSetting('Theme Java 300', 'Select the color of java 300 in your theme', themeName, '--java-300', '#b6e5e2');
const java400Setting = genColorSetting('Theme Java 400', 'Select the color of java 400 in your theme', themeName, '--java-400', '#80d2cd');
const java500Setting = genColorSetting('Theme Java 500', 'Select the color of java 500 in your theme', themeName, '--java-500', '#49beb7');
const java600Setting = genColorSetting('Theme Java 600', 'Select the color of java 600 in your theme', themeName, '--java-600', '#42aba5');
const java700Setting = genColorSetting('Theme Java 700', 'Select the color of java 700 in your theme', themeName, '--java-700', '#2c726e');
const java800Setting = genColorSetting('Theme Java 800', 'Select the color of java 800 in your theme', themeName, '--java-800', '#215652');
const java900Setting = genColorSetting('Theme Java 900', 'Select the color of java 900 in your theme', themeName, '--java-900', '#163937');
const goldenTainoi100Setting = genColorSetting('Theme Golden Tainoi 100', 'Select the color of golden tainoi 100 in your theme', themeName, '--golden-tainoi-100', '#fffaef');
const goldenTainoi200Setting = genColorSetting('Theme Golden Tainoi 200', 'Select the color of golden tainoi 200 in your theme', themeName, '--golden-tainoi-200', '#fef3d6');
const goldenTainoi300Setting = genColorSetting('Theme Golden Tainoi 300', 'Select the color of golden tainoi 300 in your theme', themeName, '--golden-tainoi-300', '#fdecbd');
const goldenTainoi400Setting = genColorSetting('Theme Golden Tainoi 400', 'Select the color of golden tainoi 400 in your theme', themeName, '--golden-tainoi-400', '#fcdd8c');
const goldenTainoi500Setting = genColorSetting('Theme Golden Tainoi 500', 'Select the color of golden tainoi 500 in your theme', themeName, '--golden-tainoi-500', '#facf5a');
const goldenTainoi600Setting = genColorSetting('Theme Golden Tainoi 600', 'Select the color of golden tainoi 600 in your theme', themeName, '--golden-tainoi-600', '#e1ba51');
const goldenTainoi700Setting = genColorSetting('Theme Golden Tainoi 700', 'Select the color of golden tainoi 700 in your theme', themeName, '--golden-tainoi-700', '#967c36');
const goldenTainoi800Setting = genColorSetting('Theme Golden Tainoi 800', 'Select the color of golden tainoi 800 in your theme', themeName, '--golden-tainoi-800', '#715d29');
const goldenTainoi900Setting = genColorSetting('Theme Golden Tainoi 900', 'Select the color of golden tainoi 900 in your theme', themeName, '--golden-tainoi-900', '#4b3e1b');
const mediumRedViolet100Setting = genColorSetting('Theme Medium Red Violet 100', 'Select the color of medium red violet 100 in your theme', themeName, '--medium-red-violet-100', '#f9ecf4');
const mediumRedViolet200Setting = genColorSetting('Theme Medium Red Violet 200', 'Select the color of medium red violet 200 in your theme', themeName, '--medium-red-violet-200', '#f1d0e4');
const mediumRedViolet300Setting = genColorSetting('Theme Medium Red Violet 300', 'Select the color of medium red violet 300 in your theme', themeName, '--medium-red-violet-300', '#e8b3d3');
const mediumRedViolet400Setting = genColorSetting('Theme Medium Red Violet 400', 'Select the color of medium red violet 400 in your theme', themeName, '--medium-red-violet-400', '#d77ab2');
const mediumRedViolet500Setting = genColorSetting('Theme Medium Red Violet 500', 'Select the color of medium red violet 500 in your theme', themeName, '--medium-red-violet-500', '#c64191');
const mediumRedViolet600Setting = genColorSetting('Theme Medium Red Violet 600', 'Select the color of medium red violet 600 in your theme', themeName, '--medium-red-violet-600', '#b23b83');
const mediumRedViolet700Setting = genColorSetting('Theme Medium Red Violet 700', 'Select the color of medium red violet 700 in your theme', themeName, '--medium-red-violet-700', '#772757');
const mediumRedViolet800Setting = genColorSetting('Theme Medium Red Violet 800', 'Select the color of medium red violet 800 in your theme', themeName, '--medium-red-violet-800', '#591d41');
const mediumRedViolet900Setting = genColorSetting('Theme Medium Red Violet 900', 'Select the color of medium red violet 900 in your theme', themeName, '--medium-red-violet-900', '#3b142c');

const tokiwaThemeSettings = [
  backgroundColorSetting,
  eucalyptus100Setting,
  eucalyptus200Setting,
  eucalyptus300Setting,
  eucalyptus400Setting,
  eucalyptus500Setting,
  eucalyptus600Setting,
  eucalyptus700Setting,
  eucalyptus800Setting,
  eucalyptus900Setting,
  java100Setting,
  java200Setting,
  java300Setting,
  java400Setting,
  java500Setting,
  java600Setting,
  java700Setting,
  java800Setting,
  java900Setting,
  goldenTainoi100Setting,
  goldenTainoi200Setting,
  goldenTainoi300Setting,
  goldenTainoi400Setting,
  goldenTainoi500Setting,
  goldenTainoi600Setting,
  goldenTainoi700Setting,
  goldenTainoi800Setting,
  goldenTainoi900Setting,
  mediumRedViolet100Setting,
  mediumRedViolet200Setting,
  mediumRedViolet300Setting,
  mediumRedViolet400Setting,
  mediumRedViolet500Setting,
  mediumRedViolet600Setting,
  mediumRedViolet700Setting,
  mediumRedViolet800Setting,
  mediumRedViolet900Setting,
];

const loadTokiwaThemeSettings = () => {
  tokiwaThemeSettings.forEach(setting => {
    findStyleRule(themeName, (rule: any) => {
      rule.style.setProperty(setting.name, window.extensionAPI.settings.get(setting.name));
    })
  })
}

export {
  tokiwaThemeSettings,
  loadTokiwaThemeSettings
}
