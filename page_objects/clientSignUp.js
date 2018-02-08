module.exports = {
    url: "client/sign-up",
    commands: [
        {
            getSpecificXpath: function(selector, value) {
                return suggestion = this.getXpath(selector).replace(/optionName/g, value);
            },
            getXpath: function(elementName) {
                let xpath;
                switch(elementName) {
                    case('@citySuburbSuggestive'):
                    xpath = this.elements.citySuburbField.selector;
                    break;
                    
                    case('@stateOptions'):
                    xpath = this.elements.stateOptions.selector;
                    break;

                    case("@postcodeSuggestive"):
                    xpath = this.elements.postcodeField.selector;
                    break;

                }
                return xpath;
            }
        }

    ],
    elements: {
        headerText: {
            selector: ".//*[@id='app']//h1",
            locateStrategy: 'xpath'
        },
        companyNameField: {
            selector: ".//*[@id='app']//form/div[1]//input",
            locateStrategy: 'xpath'
        },
        abnField: {
            selector: ".//*[@id='app']//input[@name='abn']",
            locateStrategy: 'xpath'
        },
        companyAddressField: {
            selector: ".//*[@id='app']//form/div[3]/div/input",
            locateStrategy: 'xpath'
        },
        citySuburbField: {
            selector: ".//*[@id='app']//input[@placeholder='Search city/suburb']",
            locateStrategy: 'xpath'
        },
        citySuburbSuggestive: {
            selector: ".//*[@id='app']//form/div[4]/div/div[2]/div/a[.='optionName']",
            locateStrategy: 'xpath'
        },
        stateDropdown: {
            selector: ".//*[@id='app']//select[@name='state']",
            locateStrategy: 'xpath'
        },
        stateOptions: {
            selector: ".//*[@id='app']//form/div[5]/div[1]/div/div/div/select/option[@value='optionName']",
            locateStrategy: 'xpath'
        },
        postcodeField: {
            selector: ".//*[@id='app']//input[@placeholder='Search postcode']",
            locateStrategy: 'xpath'
        },
        postcodeSuggestive: {
            selector: ".//*[@id='app']//form/div[5]/div[2]/div/div/div[2]/div/a/span[.='optionName']",
            locateStrategy: 'xpath'
        },
        companyPhoneField: {
            selector: ".//*[@id='app']//form/div[6]/div/input",
            locateStrategy: 'xpath'
        },
        companyMobileField: {
            selector: ".//*[@id='app']//form/div[7]/div/input",
            locateStrategy: 'xpath'
        },
        contactNameField: {
            selector: ".//*[@id='app']//form/div[8]/div/input",
            locateStrategy: 'xpath'
        },
        emailAddressField: {
            selector: ".//*[@id='app']//form/div[9]/div/input",
            locateStrategy: 'xpath'
        },
        captchaValidation: {
            selector: ".//*[@id='app']//p[.='Please verify that you are not a robot']",
            locateStrategy: 'xpath'
        },
        termsCheckbox: {
            selector: ".//*[@type='checkbox']",
            locateStrategy: 'xpath'
        },
        signUpBtn: {
            selector: ".//*[@id='app']//form/div[12]/button",
            locateStrategy: 'xpath'
        }
    }
}