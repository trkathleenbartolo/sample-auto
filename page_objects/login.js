module.exports = {
    url: "/login",
    commands: [
        // {
        //     isUserNavigatedToDashboard: (userPage, url) => {
        //         switch(userPage) {
        //             case("Tech"):
        //             case("Tech User"):
        //             case("Tech Dashboard"):
                        
        //         }
        //     }
        // }
    ],
    elements: {
        loginBtn: {
            selector: ".//*[@id='app']//a[@name='login']",
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
        loginBtn: {
            selector: ".//*[@id='app']//button[@name='login']",
            locateStrategy: 'xpath'
        },
        signUpLink: {
            selector: ".//*[@id='app']//a[contains(.,'Sign up')]",
            locateStrategy: 'xpath'
        }
    }
}