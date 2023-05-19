package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps  {


    @Given("^I am on homepage$")
    public void iAmOnHomepage() throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().switchFrame();

    }

    @When("^I accept all cookies$")
    public void iAcceptAllCookies(){
        new HomePage().acceptAllCookies();
    }



    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle)  {
      new HomePage().enterJobTitle(jobTitle);

    }

    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String location)  {
        new HomePage().enterLocation(location);

    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance) {
        new HomePage().selectDistance(distance);

    }

    @And("^I click on moreSearchOptionsLink$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String salaryMin)  {
        new  HomePage().enterMinSalary(salaryMin);


    }

    @And("^I enter salaryMax \"([^\"]*)\"$")
    public void iEnterSalaryMax(String salaryMax)  {
        new HomePage().enterMaxSalary(salaryMax);

    }

    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType)  {
        new HomePage().selectSalaryType(salaryType);

    }

    @And("^I select jobType \"([^\"]*)\"$")
    public void iSelectJobType(String jobType)  {
        new HomePage().selectJobType(jobType);


    }

    @And("^I click on ([^\"]*) button$")
    public void iClickOnButton( )  {
        new HomePage().clickOnfindJobsButton();

    }

    @Then("^I verify the result \"([^\"]*)\"$")
    public void iverifyTheResult(String result)  {
     new ResultPage().verifyTheResults(result, "Results per page", "Verify Result");

    }


}
