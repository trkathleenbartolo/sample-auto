const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    let logoutPageObjects = client.page.logout();
    let techPageObjects = client.page.techDashboard();
    let clientPageObjects = client.page.clientDashboard();
    When(/^I hover my mouse pointer on the (.*) dropdown$/, (dropdownname) => {
        
    });

    Then(/^I click on the Logout link$/, () => {

    });

    Then(/^I should be successfully logged out as (.*)$/, (usertype) => {

    });

    Then(/^I should be navigated back to TechDirect Home page$/, () => {

    });

    Then(/^(.*) Header should transform back to Public Header$/, (usertype) => {

    });

    Then(/^(.*) dropdown should transform back to Login button$/, (dropdownname) => {

    });

    Then(/^I am able to navigate again to the following pages:$/, (dataTable) => {

    });

    Then(/^(.*) pages should not be navigable anymore$/, (usertype) => {

    });

});