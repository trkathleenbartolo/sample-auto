const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    homeObjects = client.page.home();
    loginObjects = client.page.login();
    techDashboardObjects = client.page.techDashboard();

    //Background:
    Given(/^I am successfully logged in as (.*) (.*) (.*)$/, (userType, email, pass) => {
        let actualEmail = CONFIG.returnConfigData(email);
        let actualPassword = CONFIG.returnConfigData(pass);

        return loginObjects.navigate()
            .waitForElementVisible('@loginForm', 3000, () => {
                loginObjects.setValue('@emailField', actualEmail)
                    .setValue('@passwordField', actualPassword)
                    .click('@formLoginBtn');
                // .waitForElementVisible('@loadingBar', 5000)
                // .waitForElementNotVisible('@loadingBar', 5000);

                switch (userType) {
                    case ('Tech'): {
                        techDashboardObjects.waitForElementVisible('@scheduleBox', 10000)
                            .assert.visible('@scheduleBox', 'I am successfully logged in as ' + userType + '.');
                        break;
                    }
                }
            });
    });

    //Scenario: Elements on Tech Dashboard should be available
    Given(/^I am navigated to the Tech Dashboard (.*)$/, (url) => {
        return techDashboardObjects.assert.urlEquals(URL.getTechPageUrl(url), 'Successfully navigated to the Tech Dashboard.');
    });

    Then(/^the following elements on Dashboard should be available:$/, (datatable) => {

    });

    Then(/^all profile view counts should be displayed on Who's viewed my profile section$/, () => {

    });

    Then(/^all events and agreements should be plotted on the Mini Calendar$/, () => {

    });

    Then(/^all events scheduled today should be listed on Today's Schedule widget$/, () => {

    });

    Then(/^all pending requests are listed on Pending Requests accordion$/, () => {

    });

    Then(/^all accepted requests should be listed on Current Engagement accordion$/, () => {

    });


});