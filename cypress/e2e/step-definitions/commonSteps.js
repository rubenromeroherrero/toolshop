import "cypress-mochawesome-reporter/cucumberSupport";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Classes imported
import { CommonPage } from "../pages/commonPage";

//Instance classes
let commonPage = new CommonPage();

Given("the user visits {string}", (url) => {
  commonPage.visitLink(url);
});

Then(
  "the user checks that the url contains de the endpoint {string}",
  (url) => {
    commonPage.checkEndpointOfUrl(url);
  }
);

Then(
  "the user check that the url not contain the endpoint {string}",
  (endpoint) => {
    commonPage.checkValueOfEndpoint(endpoint);
  }
);
