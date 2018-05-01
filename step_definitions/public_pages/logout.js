const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    let logoutPageObjects = client.page.logout();
    let techPageObjects = client.page.techDashboard();
    let clientPageObjects = client.page.clientDashboard();
    let headerPageObjects = client.page.header();
    let homePageObjects = client.page.home();
    When(/^I hover my mouse pointer on the (.*) dropdown$/, (dropdownname) => {
        logoutPageObjects.waitForElementVisible('@headerUserName', 3000)
            .assert.visible('@userNavBar', 'User dropdown is visible.')
            .assert.containsText('@headerUserName', dropdownname, 'Username on user dropdown is correct.')
            .moveToElement('@userNavBar', 0, 0);
    });

    Then(/^I click on the Logout link$/, () => {
        return logoutPageObjects.waitForElementVisible('@userDropdownCont', 3000)
            .click('@logoutLink');
    });

    Then(/^I should be successfully logged out as (.*)$/, (usertype) => {

    });

    Then(/^I should be navigated back to TechDirect Home page (.*)$/, (url) => {
        headerPageObjects.waitForElementVisible('@loginBtn', 3000);
        return client.assert.urlEquals(URL.getPublicPageUrl(url), 'I am navigated to TechDirect Home page.')
    });

    Then(/^(.*) Header should transform back to Public Header$/, (usertype) => {
        return headerPageObjects.assert.visible('@aboutUsLink', 'About us link is visible.')
        .assert.visible('@howItWorksLink', 'How it works link is visible.')
        .assert.visible('@contactUsLink', 'Contact us link is visible.');
        
    });

    Then(/^(.*) dropdown should transform back to Login button$/, (dropdownname) => {
        headerPageObjects.assert.visible('@loginBtn', 'Login button is visible.');
        logoutPageObjects.assert.elementNotPresent('@headerUserName', 'User dropdown is not present at the moment.');
    });

    Then(/^I am able to navigate again to the following pages:$/, (dataTable) => {
        GLOBAL_CMD.arePublicPagesNavigable(dataTable, homePageObjects);
    });

    Then(/^(.*) pages should not be navigable anymore$/, (usertype) => {

    });

});