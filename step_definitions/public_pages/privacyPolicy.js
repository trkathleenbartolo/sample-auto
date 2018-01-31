const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    Then(/^I clicked on (.*) link on Footer$/, (footerLink) => {
        const menu = NAV_UTIL.getHeaderXpath(footerLink);

        return client.click(menu.xpath)
            .pause(1000)
            .assert.urlEquals(CONFIG.APP_URL + menu.expectedUrl);
    });
    Then(/^Privacy Policy page should be displayed correctly$/, () => {

    });

    Then(/^the following elements should be visible:$/, () => {

    });
});