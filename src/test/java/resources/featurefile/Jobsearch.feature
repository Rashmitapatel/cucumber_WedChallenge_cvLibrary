Feature: JobSearch TEst
  As a User I should Search cv library
@sanity @regression
  Scenario Outline: User should verify JobSearch Result  UsingDifferentDataSet
    Given I am on homepage
    When  I accept all cookies
    And   I enter job title "<jobTitle>"
    And   I enter Location "<location>"
    And   I select distance "<distance>"
    And   I click on moreSearchOptionsLink
    And   I enter salaryMin "<salaryMin>"
    And   I enter salaryMax "<salaryMax>"
    And   I select salaryType "<salaryType>"
    And   I select jobType "<jobType>"
    And   I click on Find Jobs button
    Then  I verify the result "<result>"
    Examples:
      | jobTitle | location | distance | salaryMin | salaryMax | salaryType | jobType |  result |
  |Tester             | Harrow,Greater London|5 miles| 30000| 50000 | Per annum  | Permanent|Permanent Tester jobs in Harrow |
#  |Manual tester      |Central London  |5 miles|30000|40000|Per annum|Permanent|Permanent Manual Tester jobs in Central London|
#  |IT Project Manager | London        | 7 miles| 40000| 50000| Per annum | Permanent|Permanent It Project Manager jobs in London|
#  |IT Developer       |Birmingham      |10 miles|40000|60000|Per annum|Permanent|Permanent It Developer jobs in Birmingham      |
#  |Automation Tester  | Bristol(County)|15 miles |40000| 50000| Per annum| Permanent|Permanent Automation Tester jobs in Bristol (County)|
#  |Business analyst   |Cardiff         |10 miles| 30000|60000| Per annum |Permanent |Permanent Business Analyst jobs in Cardiff|
