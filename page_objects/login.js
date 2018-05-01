module.exports = {
    url: "/login",
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
            // selector: "#userID"
            selector: ".//*[@id='userID']",
            locateStrategy: 'xpath'
        },
        passwordField: {
            // selector: "#userPassword"
            selector: ".//*[@id='userPassword']",
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