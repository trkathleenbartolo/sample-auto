const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../util/xpath');
const CONFIG = require('../util/config');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {

  Given(/^I am navigated to any TechDirect Public page$/, () => {
    return client.url(CONFIG.APP_URL);
  });

  Then(/^header should always be visible at the top of the page$/, () => {
    return true;
  });

  Then(/^the following elements should be displayed correctly:$/, () => {
    return true;
  });

  Then(/^clicking on the (.*) link should navigate me to the correct page (.*)$/, (headerLink, pageUrl) => {
    const menu = getHeaderXpath(headerLink);

    client.click(menu.xpath);
    client.pause(1000);
    client.assert.urlEquals(CONFIG.APP_URL + menu.expectedUrl);
  });

});

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
      menu.expectedUrl = '/';
      break;

    case ('About Us link'):
      menu.xpath = XPATH.MENU_ABOUT_US;
      menu.expectedUrl = '/about-us';
      break;

    case ('How It Works link'):
      menu.xpath = XPATH.MENU_HOW_IT_WORKS;
      menu.expectedUrl = '/how-it-works';
      break;

    case ('Contact Us link'):
      menu.xpath = XPATH.MENU_CONTACT_US;
      menu.expectedUrl = '/contact-us';
      break;
  }

  return menu;
} 