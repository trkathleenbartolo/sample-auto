module.exports = {
    url: "/tech/initial-sign-up",
    sections: {
        initialForm: {
            selector: ".//*[@id='app']//input",
            locateStrategy: 'xpath',
            elements: {
                emailField: {
                    selector: ".//*[@name='emailAdress']",
                    locateStrategy: 'xpath'
                },
                firstNameField: {
                    selector: ".//*[@name='firstName']",
                    locateStrategy: 'xpath'
                },
                lastNameField: {
                    selector: ".//*[@name='lastName']",
                    locateStrategy: 'xpath'
                },
                termsCheckbox: {
                    selector: ".//*[@type='checkbox']",
                    locateStrategy: 'xpath'
                }
            }
        }
    },
    elements: {
        termsLink: {
            selector: ".//*[@id='app']//a[@class='terms']",
            locateStrategy: 'xpath'
        },
        captcha: {
            selector: ".//*[@id='app']//div[contains(@class,'captcha-container')]",
            locateStrategy: 'xpath'
        },
        captchaValidation: {
            selector: ".//*[@id='app']//p[.='Please verify that you are not a robot']",
            locateStrategy: 'xpath'
        },
        continueBtn: {
            selector: ".//*[@id='app']//button[.='Continue']",
            locateStrategy: 'xpath'
        },
        loginLink: {
            selector: ".//*[@id='app']//a[contains(.,'Log In')]",
            locateStrategy: 'xpath'
        },
        emailField: {
            selector: ".//*[@name='emailAdress']",
            locateStrategy: 'xpath'
        },
        firstNameField: {
            selector: ".//*[@name='firstName']",
            locateStrategy: 'xpath'
        },
        lastNameField: {
            selector: ".//*[@name='lastName']",
            locateStrategy: 'xpath'
        },
        termsCheckbox: {
            selector: ".//*[@type='checkbox']",
            locateStrategy: 'xpath'
        }
    }
};