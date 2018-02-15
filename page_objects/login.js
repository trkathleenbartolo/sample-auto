module.exports = {
    url: "/login",
    commands: [
        {
            
        }
    ],
    elements: {
        headerLoginBtn: {
            selector: ".//*[@id='app']//a[@name='login']",
            locateStrategy: 'xpath'
        },
        loginForm: {
            selector: ".//*[@id='app']//div[@class='box']",
            locateStrategy: 'xpath'
        },
        headerText: {
            selector: ".//*[@id='app']//h1",
            locateStrategy: 'xpath'
        },
        emailAddressField: {
            selector: ".//*[@id='app']//input[@name='email']",
            locateStrategy: 'xpath'
        },
        passwordField: {
            selector: ".//*[@id='app']//input[@type='password']",
            locateStrategy: 'xpath'
        },
        rememberMeCheckbox: {
            selector: ".//*[@id='app']//input[@type='checkbox']",
            locateStrategy: 'xpath'
        },
        formLoginBtn: {
            selector: ".//*[@id='app']//button[@name='login']",
            locateStrategy: 'xpath'
        },
        signUpLink: {
            selector: ".//*[@id='app']//a[contains(.,'Sign up')]",
            locateStrategy: 'xpath'
        },
        headerUserName: {
            selector: ".//*[@id='app']//span[@class='user-name']",
            locateStrategy: 'xpath'
        }
    }
}