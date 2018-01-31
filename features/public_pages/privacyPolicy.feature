#Feature and step definition - still incomplete, contents not yet provided by the PO
Feature: Public Pages - Privacy Policy

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on Privacy Policy link on Footer

    Scenario: Elements on Privacy Policy page should be displayed correctly
        Given I am navigated to the TechDirect Privacy Policy page {td.privacy.policy.path}
        Then Privacy Policy page should be displayed correctly
        # And the following elements should be visible:
        #     | Header  |
        #     | Content |
        #     | Footer  |