Feature: Footer

    @smoketest
    Scenario Outline: Footer should always be visible at the bottom of all Public pages
        Given I am navigated to any TechDirect Public page
        Then Footer should always be visible at the bottom of the page
        And the following Footer elements should be displayed correctly:
            | Copyright text             |
            | "Tech Direct" text         |
            | Release version text       |
            | "All Rights Reserved" text |
            | Privacy Policy link        |
            # | Social Media links         |
        And clicking on the <footerLink> link on Footer should navigate me to the correct page <pageUrl>

        Examples:
            | footerLink     | pageUrl                  |
            | Privacy Policy | {td.privacy.policy.path} |