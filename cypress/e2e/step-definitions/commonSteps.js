import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Classes to import
import { CommonPage } from "../pages/commonPage";

//Instance classes
let commonPage = new CommonPage();

Given("the user visits {string}", (url) => {
  commonPage.visitLink(url);
});

Then(
  "the user checks that the url {string} the endpoint {string}",
  (inspectProperty, endpoint) => {
    commonPage.checkValueOfEndpoint(inspectProperty, endpoint);
  }
);
