const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
  const headerObjects = client.page.header();

  Given(/^I am navigated to any TechDirect Public page$/, () => {
    return client.url(CONFIG.APP_URL);
  });

  Then(/^header should always be visible at the top of the page$/, () => {
    return headerObjects.assert.visible("@headerCont");
  });

  Then(/^the following Header elements should be displayed correctly:$/, (datatable) => {
    let table = datatable.rawTable;
    let dataSize = table.length;
    let dataItem, element;
    for (let i = 0; i < dataSize; i++) {
      dataItem = table[i][0];
      element = "@" + NAV_UTIL.camelize(dataItem);
      // console.log(element);
      headerObjects.assert.visible(element);
    }
  });

  Then(/^clicking on the (.*) link should navigate me to the correct page (.*)$/, (headerLink, pageUrl) => {
    const menu = NAV_UTIL.getHeaderXpath(headerLink);

    return client.click(menu.xpath)
    .pause(1000)
    .assert.urlEquals(CONFIG.APP_URL + menu.expectedUrl);
  });

});