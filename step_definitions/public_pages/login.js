const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    let loginPageElements = client.page.login();
    let clientSearchElements  = client.page.clientSearch();
    let techDashboardElements = client.page.techDashboard();

      When(/^I log in as (.*) using correct credentials (.*) (.*)$/, (usertype, email, pass) => {
        return loginPageElements.setValue("@emailAddressField", email)
        .setValue("@passwordField", pass);
      });
    
      Then(/^I should be successfully logged in as (.*)$/, (usertype) => {
        
      });
    
      Then(/^I clicked on Login button on Header$/, () => {
        return loginPageElements.click("@loginBtn")
        .waitForElementVisible("@headerText", 3000);
      });
    
      Then(/^I click on Login button$/, () => {
        return loginPageElements.click("@loginBtn");
      });
    
      Then(/^I should be navigated to (.*) (.*)$/, (userpage, url) => {
        let pageObjects, xpath;
        switch(userpage) {
            case("Tech Dashboard"):
            pageObjects = techDashboardElements;
            xpath = "@scheduleBox";
            break;

            case("Client Search page"):
            pageObjects = clientSearchElements;
            xpath = "@searchBox";
        }
        pageObjects.waitForElementVisible(xpath);
        client.assert.urlEquals(CONFIG.APP_URL + URL.url);
      });
    
      Then(/^Login button should transform into a Hi, (.*) dropdown$/, (usertype) => {
        
      });
    
      Then(/^clicking on TechDirect logo should always navigate me to (.*) (.*)$/, (userpage, url) => {
        
      });

});