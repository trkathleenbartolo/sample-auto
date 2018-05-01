module.exports = {
    elements: {
        forgotPasswordLink: {
            selector: "//*[@id='app']//a[.='Forgot Password?']",
            locateStrategy: 'xpath'
        },
        forgotPasswordBox: {
            selector: "//*[@id='app']//div[@class='box']",
            locateStrategy: 'xpath'
        },
        emailAddressField: {
            selector: ".//*[@id='app']//input[@placeholder='Email Address']",
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
        submitBtn: {
            selector: ".//*[@id='app']/section/div/div/div/div/form/div[3]/button[2]",
            locateStrategy: 'xpath'
        },
        cancelBtn: {
            selector: ".//*[@id='app']//button[.='Cancel']",
            locateStrategy: 'xpath'
        },
        modalContent: {
            selector: ".//*/div[2]/div[2]/section/div/div[@class='media-content']/p",
            locateStrategy: 'xpath'
        },
        modalBox: {
            selector: ".//*/div[2]/div[@class='modal-card animation-content']",
            locateStrategy: 'xpath'
        },
        modalOkBtn: {
            selector: "./*//div[2]/div[2]/footer/button[contains(.,'OK')]",
            locateStrategy: 'xpath'
        }
    }
}