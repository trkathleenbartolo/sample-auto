module.exports = {
    url: "/contact-us",
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

                    case('Send us your message form'):
                    elements.xpath = '@sendUsYourMessageForm';
                    break;

                    case('Contact Information section'):
                    elements.xpath = '@contactInfoSection';
                    break;

                    case('Follow Us section'):
                    elements.xpath = 'followUsSection';
                    break;

                    case('Footer'):
                    elements.xpath = '@footer';
                    break;

                    case('Business Address'):
                    elements.xpath = '@businessAddress';
                    break;

                    case('Support Email Address'):
                    elements.xpath = '@supportEmailAddress';
                    break;

                    case('Facebook icon'):
                    elements.xpath = '@facebookIcon';
                    break;

                    case('GooglePlus icon'):
                    elements.xpath = '@googlePlusIcon';
                    break;

                    case('Twitter icon'):
                    elements.xpath = '@twitterIcon';
                    break;
                }
                return elements.xpath;
            }
        }
    ],
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
        contactUsForm: {
            selector: ".//*[@name='contact-form']",
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
        contactInfoSection: {
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