module.exports = {
  APP: "//*[@id='app']",
  PAGE_HEADER: ".//*[@id='app']//h1",
  
  //HOME
  HOME_TECH_SIGNUP_BTN: ".//*[@id='app']//a[.='Tech Sign up']",
  HOME_CLIENT_SIGNUP_BTN: ".//*[@id='app']//a[.='Client Sign up']",

  //HEADER
	LOGO: "//*[@class='navbar-brand']//*[@href='/']",
  MENU_ABOUT_US: "//*[@class='navbar-start']//*[@href='/about-us']",
  MENU_HOW_IT_WORKS: "//*[@class='navbar-start']//*[@href='/how-it-works']",
  MENU_CONTACT_US: "//*[@class='navbar-start']//*[@href='/contact-us']",

  //CONTACT US
  CONTACT_US_FORM: "//*[@name='contact-form']",
  CONTACT_US_NAME: "//*[@name='contact-form']//*[@name='name']",
  CONTACT_US_EMAIL: "//*[@name='contact-form']//*[@name='email']",
  CONTACT_US_PHONE: "//*[@name='contact-form']//*[@name='phone']",
  CONTACT_US_MESSAGE: "//*[@name='contact-form']//*[@name='message']",

  //FOOTER
  FOOTER_CONTAINER: ".//*[@id='app']/footer",
  FOOTER_COPYRIGHT: ".//*[@id='app']//span[@class='copyright']",
  FOOTER_RIGHTS: ".//*[@id='app']//span[contains(@class, version)]",
  FOOTER_PRIVACY_POLICY: ".//*[@id='app']//a[.='Privacy Policy']",
  FOOTER_SOCIAL_ICONS: ".//*[@id='app']//span[@class='icon']",

  //PRIVACY POLICY
  PRIVACY_POLICY_HEADER: ".//*[@id='app']//h1[.='Privacy Policy']",

  //TECH SIGN UP
  TECH_SIGNUP_HEADERTEXT: ".//*[@id='app']//h1[.='Join Us Today!']",

  //CLIENT SIGN UP
  CLIENT_SIGNUP_HEADERTEXT: ".//*[@id='app']//h1[.='Client Sign Up']",

  //LOGIN 
  EMAIL_ADDRESS_FIELD: "#userID",
  PASSWORD_FIELD: "#userPassword"
};