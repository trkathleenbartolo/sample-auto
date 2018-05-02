const TEST_DATA = require('../test-data');

module.exports = {
  APP_URL: TEST_DATA.GET_ENVI().domain,

  TECH_USERNAME: TEST_DATA.GET_ENVI().tech.email,
  TECH_PASSWORD: TEST_DATA.GET_ENVI().tech.password,

  CLIENT_USERNAME: TEST_DATA.GET_ENVI().client.email,
  CLIENT_PASSWORD: TEST_DATA.GET_ENVI().client.password
  
};