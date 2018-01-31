module.exports = {
    url: "/contact-us",
    sections: {
        form: {
            selector: ".//*[@id='app']//div[@class='field']/div",
            locateStrategy: 'xpath',
            elements: {
                nameField: {
                    selector: "//*[@name='contact-form']//*[@name='name']",
                    locateStrategy: 'xpath'
                },
                emailField: {
                    selector: "//*[@name='contact-form']//*[@name='email']",
                    locateStrategy: 'xpath'
                },
                phoneField: {
                    selector: "//*[@name='contact-form']//*[@name='phone']",
                    locateStrategy: 'xpath'
                },
                msgTxtArea: {
                    selector: "//*[@name='contact-form']//*[@name='message']",
                    locateStrategy: 'xpath'
                }
            }
        }
    },
    elements: {
        header: {
            selector: ".//*[@id='app']/nav",
            locateStrategy: 'xpath'
        },
        submitBtn: {
            selector: ".//*[@id='app']//button[@name='submit']",
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
        sendUsYourMessageForm: {
            selector: ".//*[@id='app']//div[@class='box is-clearfix message-box']",
            locateStrategy: 'xpath'
        },
        contactInformationSection: {
            selector: ".//*[@id='app']//div[@class='contact-details']",
            locateStrategy: 'xpath'
        },
        followUsSection: {
            selector: ".//*[@id='app']//div[@class='social-icons']",
            locateStrategy: 'xpath'
        },
        footer: {
            selector: ".//*[@id='app']/footer",
            locateStrategy: 'xpath'
        },
        businessAddress: {
            selector: ".//*[@id='app']//div[@class='contact-details']/p[1]",
            locateStrategy: 'xpath'
        },
        supportEmailAddress: {
            selector: ".//*[@id='app']//div[@class='contact-details']/p[2]",
            locateStrategy: 'xpath'
        },
        facebookIcon: {
            selector: ".//*[@id='app']//a[@class='fb-icon']",
            locateStrategy: 'xpath'
        },
        googlePlusIcon: {
            selector: ".//*[@id='app']//a[@class='gplus-icon']",
            locateStrategy: 'xpath'
        },
        twitterIcon: {
            selector: ".//*[@id='app']//a[@class='twitter-icon']",
            locateStrategy: 'xpath'
        }
    }
};