Feature: Header
  Scenario Outline: Header should always be visible at the top of all Public pages
    Given I am navigated to any TechDirect Public page
    Then header should always be visible at the top of the page
    And the following elements should be displayed correctly:
    And clicking on the <headerLink> link should navigate me to the correct page <pageUrl>

    Examples:
      | headerLink        | pageUrl       |
      | TechDirect logo   |               |
      | About Us link     | /about-us     |
      | How It Works link | /how-it-works |
      | Contact Us link   | /contact-us   |
      | Log In link       | /             |