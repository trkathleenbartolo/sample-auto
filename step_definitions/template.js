/*
const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
  homeObjects = client.page.home();

  //Background:

  Given(/^I accessed the TechDirect Home page using correct url (.*)$/, (url) => {
    return client.url(URL.DOMAIN);
  });

  //Scenario:
  Then(/^I should be navigated to the TechDirect Home page$/, () => {
    return client.assert.urlEquals(URL.DOMAIN + URL.PUBLIC_PAGES.HOME);
  });


});
*/