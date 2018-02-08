Feature: Client Sign Up

    Background:
        Given I am navigated to the TechDirect Home page
        And I clicked on Client Sign Up button

    @smoketest
    Scenario Outline: Signing up as Client should proceed when required fields are filled up with correct values
        Given I am navigated to the TechDirect Client Sign Up page
        When I fill up all the required fields with valid values <company> <abn> <address> <citySuburb> <state> <postcode> <phone> <mobile> <contactName> <email>
        And I tick the I have read and agreed to the Terms and Conditions" checkbox
        And I click on the Sign Up button
        Then signing up as Client should proceed
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
            | company   | abn         | address     | citySuburb | state      | postcode | phone        | mobile     | contactName | email                              |
            | Tooltwist | 51824753556 | ClarkCenter | Ravenhall  | Queensland | 4223     | +61421000000 | 0283354600 | TesterKath  | kathleen.bartolo@twistpartners.com |