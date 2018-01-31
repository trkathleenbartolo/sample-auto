const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {

    Then(/^Footer should always be visible at the bottom of the page$/, () => {
       return client.assert.elementPresent(XPATH.FOOTER_CONTAINER);
    });

    Then(/^the following Footer elements should be displayed correctly:$/, (datatable) => {
        
    });

});