const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../util/xpath');
const CONFIG = require('../util/config');
const URL = require('../util/url');

client.useXpath();

module.exports = {
  getHeaderXpath,
  getBtnXpath,
  camelize
}

/**
 * Get Header xpath and xpected url
 * @param {string} headerLink 
 * @return {object} expectedXpath and expectedUrl
 */
function getHeaderXpath(headerLink) {
  let menu = { xpath: '', expectedUrl: '' };

  switch (headerLink) {
    case ('TechDirect logo'):
      menu.xpath = XPATH.LOGO;
      menu.expectedUrl = URL.HOME;
      break;

    case ('Login'):
    case ('Log In'):
      menu.xpath = XPATH.LOGO;
      menu.expectedUrl = URL.HOME;
      break;

    case ('About Us'):
      menu.xpath = XPATH.MENU_ABOUT_US;
      menu.expectedUrl = URL.ABOUT_US;
      break;

    case ('How It Works'):
      menu.xpath = XPATH.MENU_HOW_IT_WORKS;
      menu.expectedUrl = URL.HOW_IT_WORKS;
      break;

    case ('Contact Us'):
      menu.xpath = XPATH.MENU_CONTACT_US;
      menu.expectedUrl = URL.CONTACT_US;
      break;

    case ('Privacy Policy'):
      menu.xpath = XPATH.FOOTER_PRIVACY_POLICY;
      menu.expectedUrl = URL.PRIVACY_POLICY;
      break;
  }

  return menu;
};

function getBtnXpath(btnName) {
  let btn = { xpath: '', url: '', waitElement: '' };

  switch (btnName) {
    case ('Tech Sign Up'):
    case ('Initial Tech'):
      btn.xpath = XPATH.HOME_TECH_SIGNUP_BTN;
      btn.url = URL.TECH_SIGN_UP;
      btn.waitElement = XPATH.TECH_SIGNUP_HEADERTEXT;
      break;

    case('Client'):
    case ('Client Sign Up'):
      btn.xpath = XPATH.HOME_CLIENT_SIGNUP_BTN;
      btn.url = URL.CLIENT_SIGN_UP;
      btn.waitElement = XPATH.CLIENT_SIGNUP_HEADERTEXT;
      break;
  }

  return btn;
};

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
};
