import { ExtensionAPI, OnloadArgs } from '../types'
import { initConfig } from './config'
import { roamThemeSettingKey } from './constants'
import { updateTheme, themeConfig } from './theme-manager'
import './styles/font-face.css'

const themConfigKey = 'themConfig'
const POWER_THEMES_PAGE_TITLE = 'Power Themes'
let interval: NodeJS.Timer
let currentTheme = ""
let prevTheme = ""

const registeThemeCommands = () => {
  for (let config of themeConfig) {
    window.extensionAPI.ui
      .commandPalette
      .addCommand({
        label: config.commandLabel,
        callback: () => {
          switchRoamTheme(config.themeKey)
        }
      })
  }
}

const removeThemeCommands = () => {
  for (let config of themeConfig) {
    window.extensionAPI.ui
      .commandPalette
      .removeCommand({ label: config.commandLabel })
  }
}

const createPowerThemesPage = async () => {
  try {
    console.log('Starting Power Themes page creation process...');
    
    // Check if Power Themes page already exists
    const existingPage = window.roamAlphaAPI.q(`
      [:find ?e ?uid
       :where [?e :node/title "${POWER_THEMES_PAGE_TITLE}"]
              [?e :block/uid ?uid]]
    `);

    let pageUid;

    if (existingPage.length === 0) {
      // Create Power Themes page
      pageUid = window.roamAlphaAPI.util.generateUID();
      await window.roamAlphaAPI.createPage({
        page: {
          title: POWER_THEMES_PAGE_TITLE,
          uid: pageUid
        }
      });

      // Add initial content to the page
      await window.roamAlphaAPI.createBlock({
        location: {
          "parent-uid": pageUid,
          order: 0
        },
        block: {
          string: "Welcome to Roam Power Themes! Configure your themes through the extension settings panel.",
          uid: window.roamAlphaAPI.util.generateUID()
        }
      });

      console.log('Power Themes page created successfully with UID:', pageUid);
    } else {
      pageUid = existingPage[0][1] as string;
      console.log('Power Themes page already exists with UID:', pageUid);
    }

    // Method 1: Use Roam's official API to star the page
    try {
      // Check if page is already starred
      const isStarred = window.roamAlphaAPI.q(`
        [:find ?e
         :where [?e :node/title "${POWER_THEMES_PAGE_TITLE}"]
                [?e :window/starred? true]]
      `);

      if (isStarred.length === 0) {
        console.log('Attempting to star the page using official API...');
        
        // Method 1: Try using data.page.update if available
        if ((window as any).roamAlphaAPI?.data?.page?.update) {
          try {
            await (window as any).roamAlphaAPI.data.page.update({
              page: {
                uid: pageUid,
                'window/starred?': true
              }
            });
            console.log('Successfully starred page using data.page.update API');
            return;
          } catch (error) {
            console.log('data.page.update method failed, trying alternative...');
          }
        }

        // Method 2: Try using updatePage if available
        if ((window as any).roamAlphaAPI?.updatePage) {
          try {
            await (window as any).roamAlphaAPI.updatePage({
              page: {
                uid: pageUid,
                'window/starred?': true
              }
            });
            console.log('Successfully starred page using updatePage API');
            return;
          } catch (error) {
            console.log('updatePage method failed, trying Datalog transaction...');
          }
        }

        // Method 3: Try using pull API to update page properties
        try {
          const pageEntity = window.roamAlphaAPI.q(`
            [:find ?e
             :where [?e :node/title "${POWER_THEMES_PAGE_TITLE}"]]
          `)[0][0];

          if (pageEntity && (window as any).roamAlphaAPI?.data?.pull) {
            // Try to use pull API to update page starred status
            const pullResult = await (window as any).roamAlphaAPI.data.pull('[*]', pageEntity);
            if (pullResult) {
              console.log('Page entity found, attempting to star via alternative method');
              // Since direct transaction API is not available, we'll rely on DOM manipulation
            }
          }
        } catch (error) {
          console.log('Pull API method failed, trying DOM manipulation...');
        }

        // Method 4: DOM manipulation as fallback
        setTimeout(async () => {
          try {
            await window.roamAlphaAPI.ui.mainWindow.openPage({
              page: { title: POWER_THEMES_PAGE_TITLE }
            });
            console.log('Navigated to Power Themes page for manual starring');
            
            setTimeout(() => {
              // Look for star button with comprehensive selectors
              const starSelectors = [
                'button[data-testid="page-star-btn"]',
                '.star-button',
                '[data-testid="star-button"]',
                '.bp3-button[title*="star" i]',
                'button[aria-label*="star" i]',
                '.rm-page-ref--starred',
                'button:has(.bp3-icon-star)',
                'button:has(.bp3-icon-star-empty)'
              ];
              
              let starred = false;
              for (const selector of starSelectors) {
                const starButton = document.querySelector(selector);
                if (starButton && !starred) {
                  try {
                    (starButton as HTMLElement).click();
                    starred = true;
                    console.log('Successfully clicked star button with selector:', selector);
                    break;
                  } catch (e) {
                    console.log('Failed to click star button:', e);
                  }
                }
              }
              
              if (!starred) {
                console.log('⭐ Power Themes page created successfully!');
                console.log('📌 To add it to your sidebar navigation:');
                console.log('   1. Navigate to the "Power Themes" page');
                console.log('   2. Click the star (⭐) icon next to the page title');
                console.log('   3. The page will appear in your sidebar under "All Pages"');
              }
            }, 2000);
            
          } catch (error) {
            console.error('Error in DOM manipulation fallback:', error);
            console.log('⭐ Power Themes page created! Please manually star it to add to sidebar.');
          }
        }, 1000);

      } else {
        console.log('✅ Power Themes page is already starred and should appear in sidebar');
      }

    } catch (error) {
      console.error('Error in starring process:', error);
      console.log('⭐ Power Themes page created! Please manually star it to add to sidebar.');
    }

  } catch (error) {
    console.error('Error in createPowerThemesPage:', error);
  }
}



const switchRoamTheme = (newTheme: string) => {
  window.extensionAPI.settings.set(roamThemeSettingKey, newTheme).then(() => {
    prevTheme = currentTheme
    currentTheme = newTheme
    updateTheme(newTheme)
  })
}

function onload({ extensionAPI }: OnloadArgs) {
  window.extensionAPI = extensionAPI
  initConfig()
  registeThemeCommands()
  
  // Create Power Themes page for sidebar navigation
  setTimeout(() => {
    createPowerThemesPage()
  }, 1000) // Delay to ensure Roam API is fully loaded
}

function onunload() {
  removeThemeCommands()
  // 只有当 currentTheme 不为空且不为空字符串时才移除
  if (currentTheme && currentTheme.trim() !== '') {
    document.body.classList.remove(currentTheme)
  }
  clearInterval(interval)
}

export default {
  onload: onload,
  onunload: onunload,
}