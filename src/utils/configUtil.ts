import { ChangeEvent } from 'react';

export const findStyleRule = (selectorText: string, onFind: Function): any => {
  [...document.styleSheets].forEach(styleSheet => {
    const rules = [...styleSheet.cssRules]
    const index = rules.findIndex(rule => (rule as any).selectorText === selectorText)
    if (index != -1) {
      onFind(rules[index])
    }
  })
}

export const genFontSizeSetting = (
  name: string,
  description: string,
  themeName: string,
  propName: string
) => {
  return {
    id: themeName + '-' + propName,
    name,
    description,
    action: {
      type: "select",
      items: ["extra small", "small", "medium", "large", "extra large",],
      onChange: (evt: any) => {
        let fontSize = '14px'
        switch (evt) {
          case 'extra small':
            fontSize = '12px'
            break
          case 'small':
            fontSize = '14px'
            break
          case 'medium':
            fontSize = '16px'
            break
          case 'large':
            fontSize = '18px'
            break
          case 'extra large':
            fontSize = '20px'
            break
          default:
            fontSize = '14px'
        }
        findStyleRule(themeName, (rule: CSSStyleRule) => rule.style.setProperty(propName, fontSize))
      },
    },
  }
}

export const genColorSetting = (
  name: string,
  description: string,
  themeName: string,
  propName: string,
  placeholder: string,
) => {
  return {
    id: themeName + '-' + propName,
    name,
    description,
    action: {
      type: "input",
      placeholder: placeholder,
      onChange: (evt: ChangeEvent<HTMLInputElement>) => {
        findStyleRule(themeName, (rule: CSSStyleRule) => rule.style.setProperty(propName, evt.target.value))
      },
    },
  }
}

export const genFontWeightSetting = (
  name: string,
  description: string,
  themeName: string,
  propName: string,
  placeholder: string,
) => {
  return {
    id: themeName + '-' + propName,
    name,
    description,
    action: {
      type: "input",
      placeholder: placeholder,
      onChange: (evt: ChangeEvent<HTMLInputElement>) => {
        findStyleRule(themeName, (rule: CSSStyleRule) => rule.style.setProperty(propName, evt.target.value));
      },
    },
  }
}


export const genFontFamilySetting = (
  name: string,
  description: string,
  themeName: string,
  propName: string,
) => {
  return {
    id: propName,
    name,
    description,
    action: {
      type: "select",
      items: ["Arial, sans-serif", "Georgia, serif", "Times New Roman, serif", "Verdana, sans-serif"],
      onChange: (evt: ChangeEvent<HTMLInputElement>) => {
        findStyleRule(themeName, (rule: CSSStyleRule) => rule.style.setProperty(propName, evt.target.value));
      },
    },
  }
}