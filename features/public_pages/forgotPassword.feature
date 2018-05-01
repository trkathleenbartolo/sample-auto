Feature: Forgot Password

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on Login button on Header
        And I clicked on the Forgot Password link

    @smoketest
    Scenario Outline: Registered user should receive a Reset Password email after entering email address on Forgot Password page
        Given I am navigated to the Forgot Password page {td.forgot.pass.page.path}
        When I enter a registered <userType> email address on Email Address field <email>
        And passed the captcha validation
        And I click on Send button
        And the following success message prompts:
            """
            We have sent an email that contains a reset password link thru this email address: <email>
            """
        Then Reset Password email should be sent to this email address

        Examples:
            | userType    | email                             |
            | Tech User   | kathleen.bartolo+t1@tooltwist.com |
            | Client User | kathleen.bartolo+c1@tooltwist.com |