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
        
        TECH_PAGES: {
            TECH_SIGN_UP: '/tech/initial-sign-up',
            TECH_DASHBOARD: '/tech',
        },

        CLIENT_PAGES: {
            CLIENT_SIGN_UP: '/client/sign-up',
            CLIENT_DASHBOARD: '/client'
        }
    },


    //PUBLIC PAGES
    HOME: '/',
    ABOUT_US: '/about-us',
    HOW_IT_WORKS: '/how-it-works',
    CONTACT_US: '/contact-us',
    PRIVACY_POLICY: '/privacy-policy',
    LOGIN: '/login',
    TECH_SIGN_UP: '/tech/initial-sign-up',
    CLIENT_SIGN_UP: '/client/sign-up',
    TECH_DASHBOARD: '/tech',
    CLIENT_DASHBOARD: '/client',

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

        case('{td.login.url}'):
        url = this.DOMAIN + this.PUBLIC_PAGES.LOGIN;
    }
    return url;
}

function getTechPageUrl(urlVar) {
    let url;
    switch (urlVar) {
    }
};

function getClientPageUrl(urlVar) {
    let url;
    switch (urlVar) {
    }
};

