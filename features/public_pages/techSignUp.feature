Feature: Tech Sign up: Initial

    Background:
        Given I am navigated to the TechDirect Home page
        And I clicked on Tech Sign Up button

    Scenario Outline: Signing up as Tech should proceed when all fields are filled up with correct values and passed the captcha validation
        Given I am navigated to the TechDirect Initial Tech Sign Up page
        When all fields on Initial Tech Sign Up form were completely filled-up with correct values <email> <firstName> <lastName>
        And I passed the captcha validation
        And I tick the I have read and agreed to the Terms and Conditions checkbox
        And I click on the enabled Continue button
        Then signing up as Tech should proceed
        And the following success message should be visible in the prompted popup:
            """
            Before you can use your Tech Direct account, you must verify your email address.
            An email has been sent to the registered address.
            Please open it and click on the provided link to activate your account.
            """
        And clicking on OK button would close the popup
        And I should be navigated back to the Home page
        And I should receive an email from TechDirect Support that contains a link for password creation

        Examples:
            | email                          | firstName | lastName |
            | kathleen.bartolo@tooltwist.com | Tester    | Kathleen |