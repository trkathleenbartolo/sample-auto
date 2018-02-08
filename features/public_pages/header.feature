Feature: Header

  @smoketest @test
  Scenario Outline: Header should always be visible at the top of all Public pages
    Given I am navigated to any TechDirect Public page
    Then header should always be visible at the top of the page
    And the following Header elements should be displayed correctly:
      | TechDirect logo   |
      | About Us link     |
      | How It Works link |
      | Contact Us link   |
      | Log In button     |
    And clicking on the <headerLink> link should navigate me to the correct page <pageUrl>

    Examples:
      | headerLink      | pageUrl                |
      | TechDirect logo | {td.home.url}          |
      | About Us        | {td.about.us.path}     |
      | How It Works    | {td.how.it.works.path} |
      | Contact Us      | {td.contact.us.path}   |
      | Log In          | {td.login.url}         |