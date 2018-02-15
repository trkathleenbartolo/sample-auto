const CONFIG = require('../util/config');

module.exports = {
    //URL METHODS
    getPublicPageUrl,
    getTechPageUrl,
    getClientPageUrl,

    //URL
    DOMAIN: CONFIG.APP_URL,
    PUBLIC_PAGES: {
        HOME: '/',
        ABOUT_US: '/about-us',
        HOW_IT_WORKS: '/how-it-works',
        CONTACT_US: '/contact-us',
        PRIVACY_POLICY: '/privacy-policy',
        LOGIN: '/login',
        
        TECH: {
            SIGN_UP: '/tech/initial-sign-up',
            DASHBOARD: '/tech',
        },

        CLIENT: {
            SIGN_UP: '/client/sign-up',
            DASHBOARD: '/client'
        }
    },

};

function getPublicPageUrl(urlVar) {
    let url;
    switch (urlVar) {
        case('{td.home.url}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.HOME;
        break;

        case('{td.about.us.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.ABOUT_US;
        break;

        case('{td.how.it.works.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.HOW_IT_WORKS;
        break;

        case('{td.contact.us.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.CONTACT_US;
        break;

        case('{td.login.page.path}'):
        case('{td.login.url}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.LOGIN;
        break;

        case('{td.privacy.policy.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.PRIVACY_POLICY;
        break;

        case('{td.tech.signup.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.TECH.SIGN_UP;
        break;

        case('{td.client.signup.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.SIGN_UP;
        break;

        case('{td.client.search.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.DASHBOARD;
        break;

        case('{td.tech.dashboard.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.TECH.DASHBOARD;
        break;
    }
    return url;
}

function getTechPageUrl(urlVar) {
    let url;
    switch (urlVar) {
        case('{td.tech.signup.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.TECH.SIGN_UP;
        break;

        case('{td.tech.dashboard.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.TECH.DASHBOARD;
        break;
    }
};

function getClientPageUrl(urlVar) {
    let url;
    switch (urlVar) {
        case('{td.client.signup.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.SIGN_UP;
        break;

        case('{td.client.search.path}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.DASHBOARD;
        break;
    }
};

