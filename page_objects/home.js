const URL = require('../util/url');

module.exports = {
    url: '/',
    commands: [
        {
            getXpath: function (elementName) {
                let elements = {
                    xpath: ''
                }
                switch (elementName) {
                    case ('Public Header'):
                        elements.xpath = '@header';
                        break;

                    case ('Client Info box'):
                        elements.xpath = '@clientInfoBox';
                        break;

                    case ('Tech Info box'):
                        elements.xpath = '@techInfoBox';
                        break;

                    case ('Headline text'):
                        elements.xpath = '@h1HeaderTxt';
                        break;

                    case ('Subheadline text'):
                        elements.xpath = '@supportingHeaderTxt';
                        break;

                    case ('Tech Direct logo'):
                        elements.xpath = '@miniTdLogo';
                        break;

                    case ('As a Business divider'):
                        elements.xpath = '@asBusinessDiv';
                        break;

                    case ('As a Consultant divider'):
                        elements.xpath = '@asConsultantDiv';
                        break;

                    case ('Client Sign Up button'):
                        elements.xpath = '@clientSignUpBtn';
                        break;

                    case ('Tech Sign Up button'):
                        elements.xpath = '@techSignUpBtn';
                        break;

                    case ('Footer'):
                        elements.xpath = '@footer';
                        break;

                    case ('If you’re HIRING header text'):
                        elements.xpath = '@clientInfoHeaderTxt';
                        break;

                    case ('Find a skilled IT consultant now subheader text'):
                        elements.xpath = '@clientInfoSubheaderTxt';
                        break;

                    case ('Client Sign up button'):
                        elements.xpath = '@clientInfoSignUpBtn';
                        break;

                    case ('If you’re an IT CONSULTANT header text'):
                        elements.xpath = '@techInfoHeaderTxt';
                        break;

                    case ('Join up and get approached for work subheader text'):
                        elements.xpath = '@techInfoSubheaderTxt';
                        break;

                    case ('Tech Sign up button'):
                        elements.xpath = '@techInfoSignUpBtn';
                        break;

                }
                return elements.xpath;
            },

            clickSignUpBtn: function (userType) {
                let btnElem = {
                    xpath: '',
                }
                switch (userType) {
                    case ('Client'):
                        btnElem.xpath = '@clientSignUpBtn';
                        break;

                    case ('Tech'):
                        btnElem.xpath = '@techSignUpBtn';
                        break;
                }
                this.click(btnElem.xpath)
                    .waitForElementVisible('@captcha', 5000);
            },
            clickSignUpBtnsOnHome: (btnName) => {
                let elements = {
                    xpath: '',
                    toWait: ''
                }
                switch (btnName) {
                    case ('Tech Info box > Sign Up'):
                        elements.xpath = '@techInfoSignUpBtn';
                        elements.toWait = '@captcha';
                        break;

                    case ('Client Info box > Sign Up'):
                        elements.xpath = '@clientInfoSignUpBtn';
                        elements.toWait = '@captcha';
                        break;

                    case ('As a Consultant divider > Sign Up'):
                        elements.xpath = '@divTechSignUpBtn';
                        elements.toWait = '@captcha';
                        break;

                    case ('As a Business divider > Sign Up'):
                        elements.xpath = '@divClientSignUpBtn';
                        elements.toWait = '@captcha';
                        break;
                }
                return elements;
            },
        }
    ],
    elements: {
        header: {
            selector: ".//*[@id='app']/nav",
            locateStrategy: 'xpath'
        },
        techDirectLogo: {
            selector: ".//*[@id='app']//img[@class='techD-logo']",
            locateStrategy: 'xpath'
        },
        clientInfoBox: {
            selector: '//*[@id="app"]/section/div[1]/div/div[1]',
            locateStrategy: 'xpath'
        },
        techInfoBox: {
            selector: '//*[@id="app"]/section/div[1]/div/div[2]',
            locateStrategy: 'xpath'
        },
        h1HeaderTxt: {
            selector: '//*[@id="app"]/section/div[2]/h1',
            locateStrategy: 'xpath'
        },
        supportingHeaderTxt: {
            selector: '//*[@id="app"]/section/div[2]/h3',
            locateStrategy: 'xpath'
        },
        miniTdLogo: {
            selector: '//*[@id="app"]/section/div[2]/img',
            locateStrategy: 'xpath'
        },
        asBusinessDiv: {
            selector: '//*[@id="app"]/section/div[3]',
            locateStrategy: 'xpath'
        },
        joinBusinessDiv: {
            selector: '//*[@id="app"]/section/section[1]',
            locateStrategy: 'xpath'
        },
        asConsultantDiv: {
            selector: '//*[@id="app"]/section/div[4]',
            locateStrategy: 'xpath'
        },
        joinConsultantDiv: {
            selector: '//*[@id="app"]/section/section[2]',
            locateStrategy: 'xpath'
        },
        clientInfoHeaderTxt: {
            selector: '//*[@id="app"]/section/div[1]/div/div[1]/div/h2[1]',
            locateStrategy: 'xpath'
        },
        clientInfoSubheaderTxt: {
            selector: '//*[@id="app"]/section/div[1]/div/div[1]/div/h2[2]',
            locateStrategy: 'xpath'
        },
        techInfoHeaderTxt: {
            selector: '//*[@id="app"]/section/div[1]/div/div[2]/div/h2[1]',
            locateStrategy: 'xpath'
        },
        techInfoSubheaderTxt: {
            selector: '//*[@id="app"]/section/div[1]/div/div[2]/div/h2[2]',
            locateStrategy: 'xpath'
        },
        clientInfoSignUpBtn: {
            selector: '//*[@id="clientSignUp"]',
            locateStrategy: 'xpath'
        },
        techInfoSignUpBtn: {
            selector: '//*[@id="techSignUp"]',
            locateStrategy: 'xpath'
        },
        divClientSignUpBtn: {
            selector: '//*[@id="app"]/section/section[1]/div/button',
            locateStrategy: 'xpath'
        },
        divTechSignUpBtn: {
            selector: '//*[@id="app"]/section/section[2]/div/button',
            locateStrategy: 'xpath'
        },
        captcha: {
            selector: ".//*[@id='app']//div[contains(@class,'captcha-container')]",
            locateStrategy: 'xpath'
        },
        footer: {
            selector: ".//*[@id='app']/footer",
            locateStrategy: 'xpath'
        }
    }
}