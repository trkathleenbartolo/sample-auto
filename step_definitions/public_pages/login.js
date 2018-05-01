const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
  let loginPageObjects = client.page.login();
  let headerPageObjects = client.page.header();

  Then(/^I clicked on Login button on Header$/, () => {
    client.deleteCookies().refresh();
    return loginPageObjects.click("@headerLoginBtn")
      .waitForElementVisible("@loginForm", 5000);
  });

  Given(/^I am navigated to the TechDirect Login page (.*)$/, (url) => {
    return client.assert.urlEquals(URL.getPublicPageUrl(url))
  });


  When(/^I log in as (.*) using correct credentials (.*) (.*)$/, (usertype, email, pass) => {
    loginPageObjects.setValue("@emailAddressField", email)
    .setValue("@passwordField", pass);

    return loginPageObjects.click("@formLoginBtn");
  });

  Then(/^I click on Login button$/, () => {
    
  });

  Then(/^I should be successfully logged in as (.*)$/, (usertype) => {

  });

  Then(/^I should be navigated to (.*) Dashboard page (.*)$/, (userType, url) => {
    loginPageObjects.waitForElementVisible('@headerUserName', 3000);
    return client.assert.urlEquals(URL.getPublicPageUrl(url))
  });

  Then(/^Login button should transform into a (.*) dropdown$/, (userName) => {
    loginPageObjects.assert.visible('@headerUserName')
      .assert.containsText('@headerUserName', userName);
  });

  Then(/^clicking on TechDirect logo should always navigate me to (.*) Dashboard page (.*)$/, (userType, url) => {
    headerPageObjects.click('@techDirectLogo');
    return client.assert.urlEquals(URL.getPublicPageUrl(url))
  });


});


