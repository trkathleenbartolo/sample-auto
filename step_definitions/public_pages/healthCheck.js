const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');
const assert = require('assert');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
  let healthCheckPageObjects = client.page.healthCheck();
  Given(/^I accessed the TechDirect Healthcheck pages (.*)$/, (url) => {
    return client.url(URL.getPublicPageUrl(url));
    // .pause(1000);
  });

  Then(/^status of the following servers should be 1, which means these are up and running:$/, (datatable) => {
    let healthCheck, apiStatus, dbStatus, searchStatus, authserviceStatus;
    let table = datatable.rawTable;
    let rowSize = table.length;
    return healthCheckPageObjects.getText("@jsonStatus", (result) => {
      // console.log(result);
      // healthCheckStatus = JSON.stringify(result.value);
      healthCheck = JSON.parse(result.value)
      // console.log('healthcheck', healthcheck.api.status);

      apiStatus = healthCheck.api.status;
      dbStatus = healthCheck.db.status;
      searchStatus = healthCheck.search.status;
      authserviceStatus = healthCheck.authservice.status;

      assert.strictEqual(apiStatus, 1, "API is down.");
      assert.strictEqual(dbStatus, 1, "DB is down.");
      assert.strictEqual(searchStatus, 1, "Cloudsearch is down.");
      assert.strictEqual(authserviceStatus, 1, "Authservice is down.");
      console.log("All servers are up.")
    })
  });
});