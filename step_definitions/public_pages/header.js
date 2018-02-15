const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
  const headerObjects = client.page.header();

  Given(/^I am navigated to any TechDirect Public page$/, () => {
    return client.url(URL.DOMAIN);
  });

  Then(/^header should always be visible at the top of the page$/, () => {
    return headerObjects.assert.visible("@headerCont");
  });

  Then(/^the following Header elements should be displayed correctly:$/, (datatable) => {
    GLOBAL_CMD.areElementsOnDatatableVisible(datatable, headerObjects);
  });

  Then(/^clicking on the (.*) link on Header should navigate me to the correct page (.*)$/, (headerLink, url) => {
    let elementXpath = headerObjects.getXpath(headerLink);
    let pageUrl = URL.getPublicPageUrl(url);

    // console.log(pageUrl);
    headerObjects.click(elementXpath);
    return client.pause(1000)
      .assert.urlEquals(pageUrl);
  });

});