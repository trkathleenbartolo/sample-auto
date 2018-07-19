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
        FORGOT_PASSWORD: '/forgot-password/',
        HEALTH_CHECK: '/healthcheck'
    },

    TECH: {
        SIGN_UP: '/tech/initial-sign-up',
        DASHBOARD: '/tech',
    },

    CLIENT: {
        SIGN_UP: '/client/sign-up',
        DASHBOARD: '/client',
        FILTERED_SEARCH_RESULTS: '/client/search-result?q=GP%20Dynamics%3B%20&industry_experience=1,5,13&state=Queensland&postcode=4816&english_proficiency=Advanced&city=Paluma&rate_range_min=0&rate_range_max=25',
        UNFILTERED_SEARCH_RESULTS: '/client/search-result?q=&industry_experience=&state=null&postcode=null&english_proficiency=null&city=&rate_range_min=null&rate_range_max=null'
    }
};

function getPublicPageUrl(urlVar) {
    let url;
    switch (urlVar) {
        case ('Home page'):
        case ('{td.home.url}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.HOME;
            break;

        case ('{td.about.us.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.ABOUT_US;
            break;

        case ('{td.how.it.works.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.HOW_IT_WORKS;
            break;

        case ('{td.contact.us.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.CONTACT_US;
            break;

        case ('Login page'):
        case ('{td.login.page.path}'):
        case ('{td.login.url}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.LOGIN;
            break;

        case ('{td.privacy.policy.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.PRIVACY_POLICY;
            break;

        case ('Initial Tech Sign up page'):
        case ('{td.tech.signup.path}'):
            url = this.DOMAIN + this.TECH.SIGN_UP;
            break;

        case ('Client Sign Up page'):
        case ('{td.client.signup.path}'):
            url = this.DOMAIN + this.CLIENT.SIGN_UP;
            break;

        case ('{td.client.search.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.DASHBOARD;
            break;

        case ('{td.tech.dashboard.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.TECH.DASHBOARD;
            break;

        case ('{td.forgot.pass.page.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.FORGOT_PASSWORD;
            break;

        case ('{health.check.page}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.HEALTH_CHECK;
            break;

        default:
            console.log('Url being visited is not found.');
            break;
    }
    return url;
}

function getTechPageUrl(urlVar) {
    let url;
    switch (urlVar) {
        case ('Tech Dashboard'):
        case ('{td.tech.dashboard.path}'):
            url = this.DOMAIN + this.TECH.DASHBOARD;
            break;
    }
    return url;
};

function getClientPageUrl(urlVar) {
    let url;
    switch (urlVar) {
        case ('{td.client.signup.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.SIGN_UP;
            break;

        case ('{td.client.search.page.path}'):
        case ('{td.client.search.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.DASHBOARD;
            break;

        case ('{td.client.search.results.page.path}'):
        case ('{td.client.search.results.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.FILTERED_SEARCH_RESULTS;
            break;

        case ('{td.client.unfiltered.search.results.path}'):
            url = this.DOMAIN + this.PUBLIC_PAGES.CLIENT.UNFILTERED_SEARCH_RESULTS;
            break;
    }
    return url;
};

