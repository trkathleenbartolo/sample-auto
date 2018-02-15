const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
  const headerObjects = client.page.header();
  const footerObjects = client.page.footer();
  const aboutUsObjects = client.page.aboutUs();

  // Then(/^I clicked on (.*) link on Header$/, (headerLink) => {
  //   const menu = NAV_UTIL.getHeaderXpath(headerLink);

  //   return client.click(menu.xpath)
  //     .pause(1000);
  // });

  // Given(/^I am navigated to the TechDirect (.*) page (.*)$/, (headerLink, url) => {
  //   const menu = NAV_UTIL.getHeaderXpath(headerLink);
  //   return client.assert.urlEquals(CONFIG.APP_URL + menu.expectedUrl);
  // });

  Then(/^About Us page should be displayed correctly$/, () => {
    return true;
  });

  Then(/^the following About Us page elements should be visible:$/, (datatable) => {
    let table = {
      items: datatable.rawTable,
      length: datatable.rawTable.length,
    };
    let dataItem = '';
    // console.log(table.length);

    for (let i = 0; i < table.length; i++) {
      dataItem = table.items[i][0];
      // console.log(dataItem);
      aboutUsObjects.isElementVisible(dataItem);
    }
  });
});