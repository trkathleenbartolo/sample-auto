#Feature and step definition - still incomplete, contents not yet provided by the PO
Feature: Public Pages - About Us

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on About Us link on Header

    Scenario: Elements on About Us page should be displayed correctly
        Given I am navigated to the TechDirect About Us page {URL.ABOUT_US}
        Then About Us page should be displayed correctly
        And the following About Us page elements should be visible:
            | Header               |
            | About Us header text |
            | Content              |
            | Footer               |