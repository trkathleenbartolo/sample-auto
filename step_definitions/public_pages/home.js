const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    homeObjects = client.page.home();
    Given(/^I accessed the TechDirect Home page using correct url$/, () => {
        return client.url(URL.DOMAIN);
      });

      Then(/^I should be navigated to the TechDirect Home page$/, () => {
        return client.assert.urlEquals(URL.DOMAIN + URL.PUBLIC_PAGES.HOME);
      });

      Then(/^the following elements on Home should be displayed correctly:$/, (datatable) => {
        GLOBAL_CMD.areElementsOnDatatableVisible(datatable, homeObjects);
      });

      Then(/^clicking on the (.*) Sign Up button should navigate me to the correct Sign Up page (.*)$/, (userType, pageUrl) => {
        homeObjects.clickSignUpBtn(userType);
        client.assert.urlEquals(URL.getPublicPageUrl(pageUrl));
      });
});