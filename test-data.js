module.exports = {
    //Set the environment that should be accessed. Options: dev, stage, uat, prod
    ENVI: 'dev',

    DEV: {
        domain: "",
        credentials: {
            email: "",
            password: ""
        }
    },

    UAT: {
        domain: "",
        credentials: {
            email: "",
            password: ""
        }
    },

    PROD: {
        domain: "",
        credentials: {
            email: "",
            password: ""
        }
    },

    //Functions and Modules
    GET_ENVI
};

function GET_ENVI() {
    switch (this.ENVI) {
        case ('dev'):
            return this.DEV;
            break;

        case ('sit'):
        case ('stage'):
            return this.DEV;
            break;

        case ('prodtest'):
        case ('uat'):
            return this.UAT;
            break;

        case ('prod'):
            return this.PROD;
            break;
    }
}