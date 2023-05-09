import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

import SubscriptionPage from  "../../../POM/subscriptionPage";import LoginPage from "../../../POM/loginPage";

const loginPage = new LoginPage() ; 

const subscriptionPage = new SubscriptionPage() ; 

When("I click on the link for self-subscription and click on Start button", function () {

    subscriptionPage.clickOnSignUp();
    subscriptionPage.clickOnStart();
   

  });

  When("I fill my identification datas fields {string} , {string} , {string} , {string}, {string}", function (firstNameAndLastName,birthDate,documentNumber,phoneNumber,mailAdress) {

    subscriptionPage.submit(firstNameAndLastName,birthDate,documentNumber,phoneNumber,mailAdress);

  });


  Then("I will be redirected to Customer Identification Summary", function () {

    subscriptionPage.redirectionStep2();

  });