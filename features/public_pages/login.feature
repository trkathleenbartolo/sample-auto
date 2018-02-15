Feature: Login

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on Login button on Header

    @smoketest
    Scenario Outline: I should be able to log in as Tech or Client User using correct credentials
        Given I am navigated to the TechDirect Login page {td.login.page.path}
        When I log in as <userType> using correct credentials <email> <pass>
        And I click on Login button
        Then I should be successfully logged in as <userType>
        And I should be navigated to <userType> Dashboard page <url>
        And Login button should transform into a <dropdownName> dropdown
        And clicking on TechDirect logo should always navigate me to <userType> Dashboard page <url>

        Examples:

            | userType | email                             | pass         | dropdownName              | url                      |
            | Tech     | kathleen.bartolo+t1@tooltwist.com | Logmein+1234 | Hi Tester Kath!           | {td.tech.dashboard.path} |
            | Client   | kathleen.bartolo+c1@tooltwist.com | Logmein+1234 | Hi Twist Resources, Inc.! | {td.client.search.path}  |