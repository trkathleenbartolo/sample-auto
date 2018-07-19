module.exports = {
    url: "/tech/initial-sign-up",
    elements: {
        initialForm: {
            selector: ".//*[@id='app']//input",
            locateStrategy: 'xpath',
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
            selector: '//*[@id="app"]/section/div/div/form/div[4]/label/label',
            locateStrategy: 'xpath'
        },
        termsLink: {
            selector: '//*[@id="app"]/section/div/div/form/div[4]/label/a',
            locateStrategy: 'xpath'
        },
        termsValidation: {
            selector: '//*[@id="app"]/section/div/div/form/div[4]/label/label/input',
            locateStrategy: 'xpath'
        },
        pAgreementCheckbox: {
            selector: '//*[@id="app"]/section/div/div/form/div[5]/label/label',
            locateStrategy: 'xpath'
        },
        pAgreementLink: {
            selector: '//*[@id="app"]/section/div/div/form/div[5]/label/a',
            locateStrategy: 'xpath'
        },
        pAgreementValidation: {
            selector: '//*[@id="app"]/section/div/div/form/div[5]/label/label/input',
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
        
    }
};