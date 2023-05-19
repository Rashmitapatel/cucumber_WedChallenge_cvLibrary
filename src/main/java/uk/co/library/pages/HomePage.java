package uk.co.library.pages;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {
  private static final Logger log = LogManager.getLogger(HomePage.class.getName());

  public HomePage() {
    PageFactory.initElements(driver, this);
  }
  @CacheLookup
  // @FindBy(xpath = "//span[text()='Accept All']")
  @FindBy(xpath = "//button[@id='save']/span/div/span")
  WebElement cookies;
  @CacheLookup
  @FindBy(xpath = "//input[@id='keywords']")
  WebElement jobTitle1;
  @CacheLookup
  @FindBy(xpath = "driver.findElement(By.xpath(\"//div[@class='hps-location hps-transition']")
  WebElement location1;
  @CacheLookup
  @FindBy(xpath = "//select[@id='distance']")
  WebElement distanceDropDown;
  @CacheLookup
  @FindBy(xpath = "//button[@id='toggle-hp-search']")
  WebElement moreSearchOptionsLink;
  @CacheLookup
  @FindBy(xpath = "//input[@id='salarymin']")
  WebElement salaryMin;
  @CacheLookup
  @FindBy(xpath = "//input[@id='salarymax']")
  WebElement salaryMax;
  @CacheLookup
  @FindBy(xpath = "//select[@id='salarytype']")
  WebElement salaryTypeDropDown;
  @CacheLookup
  @FindBy(xpath = "//select[@id='tempperm']")
  WebElement jobTypeDropDown;
  @CacheLookup
  @FindBy(xpath = "//select[@id='tempperm']")
  WebElement findJobsBtn;
//---------------------------------------Methods------------------------------------------------------//
  public void acceptAllCookies() {
    mouseHoverToElementAndClick(cookies);
  }

  public void enterJobTitle(String jobTitle) {
   log.info("Enter job Title" + jobTitle1.toString());
    sendTextToElement(jobTitle1, jobTitle);
    
  }

  public void enterLocation(String location) {
   log.info("Enter Location" + location1.toString());
    sendTextToElement(location1, location);

  }

  public void selectDistance(String distance) {
   log.info("Select Distance" + distanceDropDown.toString());
    selectByVisibleTextFromDropDown(distanceDropDown,distance);
   
  }

  public void clickOnMoreSearchOptionLink() {
   log.info("click on MoreSerchOptionLink" + moreSearchOptionsLink.toString());
    clickOnElement(moreSearchOptionsLink);

  }

  public void enterMinSalary(String MinSalary) {
   log.info("Enter MinSalary" + MinSalary.toString());
    sendTextToElement(salaryMin, MinSalary);
  

  }
    public void   enterMaxSalary(String maxSalary){
   log.info("Enter MaxSalary"+maxSalary.toString());
      sendTextToElement(salaryMax,maxSalary);
   
    }
    public void selectSalaryType (String sType){
   log.info("Select SalaryType"+sType.toString());
      selectByVisibleTextFromDropDown(salaryTypeDropDown,sType);
   

    }
    public void selectJobType(String jobType){
   log.info("Select JobType"+jobType.toString());
      selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
    
    }
    public void clickOnfindJobsButton(){
   log.info("click on FindJobButton"+findJobsBtn.toString());
      clickOnElement(findJobsBtn);
    
    }
    public void switchFrame(){
        driver.switchTo().frame(4);

    }

}
