const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    Given(/^I accessed the TechDirect Home page using correct url$/, () => {
        return client.url(CONFIG.APP_URL);
      });

      Then(/^I should be navigated to the TechDirect Home page$/, () => {
        return client.assert.urlEquals(CONFIG.APP_URL + URL.HOME);
      });

      Then(/^clicking on the (.*) button should navigate me to the correct page (.*)$/, (signUpBtn, pageUrl) => {
        const btn = NAV_UTIL.getBtnXpath(signUpBtn);

        client.click(btn.xpath);
        client.waitForElementVisible(btn.waitElement, 3000);
        return client.assert.urlEquals(CONFIG.APP_URL + btn.url);
      });
});