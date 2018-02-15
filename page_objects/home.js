const URL = require('../util/url');

module.exports = {
    url: '/',
    commands: [
        {
            getXpath: function(elementName) {
                let elements = {
                    xpath: ''
                }
                switch(elementName) {
                    case('Header'):
                    elements.xpath = '@header';
                    break;

                    case('H1 Header text'):
                    elements.xpath = '@h1HeaderTxt';
                    break;

                    case('Supporting Header text'):
                    elements.xpath = '@supportingHeaderTxt';
                    break;

                    case('Client Sign Up button'):
                    elements.xpath = '@clientSignUpBtn';
                    break;

                    case('Tech Sign Up button'):
                    elements.xpath = '@techSignUpBtn';
                    break;

                    case('Footer'):
                    elements.xpath = '@footer';
                    break;

                }
                return elements.xpath;
            },

            clickSignUpBtn: function(userType) {
                let btnElem = {
                    xpath: '',
                }
                switch(userType) {
                    case('Client'): 
                    btnElem.xpath = '@clientSignUpBtn';
                    break;

                    case('Tech'):
                    btnElem.xpath = '@techSignUpBtn';
                    break;
                }
                this.click(btnElem.xpath)
                .waitForElementVisible('@captcha', 5000);
            }
        }
    ],
    elements: {
        header: {
            selector: ".//*[@id='app']/nav",
            locateStrategy: 'xpath'
        },
        h1HeaderTxt: {
            selector: ".//*[@id='app']//h1",
            locateStrategy: 'xpath'
        },
        supportingHeaderTxt: {
            selector: ".//*[@id='app']/section//p",
            locateStrategy: 'xpath'
        },
        clientSignUpBtn: {
            selector: ".//*[@id='clientSignUp']",
            locateStrategy: 'xpath'
        },
        techSignUpBtn: {
            selector: ".//*[@id='techSignUp']",
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