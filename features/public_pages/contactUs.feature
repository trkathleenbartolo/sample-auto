Feature: Public Pages - Contact Us

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on Contact Us link on Header

    @test
    Scenario: Elements on Contact Us page should be displayed correctly
        Given I am navigated to the TechDirect Contact Us page {td.contact.us.path}
        Then Contact Us page should be displayed correctly
        And the following sections on Contact Us page should be visible:
            | Header                      |
            | Send us your message form   |
            | Contact Information section |
            | Follow Us section           |
            | Footer                      |
        And on Contact Information section, the following information should be indicated:
            | Business Address      |
            | Support Email Address |
        And on Follow Us section, the following elements should be visible:
            | Facebook icon   |
            | GooglePlus icon |
            | Twitter icon    |

    Scenario Outline: Sending of Contact Us form should proceed when all fields are filled up with correct values and passed the captcha validation
        Given I am navigated to the TechDirect Contact Us page {td.contact.us.path}
        When all fields on Contact Us form were completely filled-up with correct values <name> <email> <phone> <msg>
        And I passed the captcha validation
        And I click on Submit button
        Then sending of form should proceed
        And form should be sent by support@techdirect.com to this receiver: admin@techdirect.com

        Examples:
            | name       | email                          | phone      | msg                  |
            | TRKathleen | kathleen.bartolo@tooltwist.com | 0283354600 | HiTechDirectSupport! |