$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "JobSearch TEst",
  "description": "As a User I should Search cv library",
  "id": "jobsearch-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should verify JobSearch Result  UsingDifferentDataSet",
  "description": "",
  "id": "jobsearch-test;user-should-verify-jobsearch-result--usingdifferentdataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "jobsearch-test;user-should-verify-jobsearch-result--usingdifferentdataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 18,
      "id": "jobsearch-test;user-should-verify-jobsearch-result--usingdifferentdataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow,Greater London",
        "5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow"
      ],
      "line": 19,
      "id": "jobsearch-test;user-should-verify-jobsearch-result--usingdifferentdataset;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18230037500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should verify JobSearch Result  UsingDifferentDataSet",
  "description": "",
  "id": "jobsearch-test;user-should-verify-jobsearch-result--usingdifferentdataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"Harrow,Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Tester jobs in Harrow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2033339500,
  "status": "passed"
});
});