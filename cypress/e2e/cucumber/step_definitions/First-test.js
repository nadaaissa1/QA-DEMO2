import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../../POM/loginPage";

const loginPage = new LoginPage() ; 
Given('A web browser is at the MyBiat Retail login page', () => {
 loginPage.visit();
});

When('A user enters {string} and  {string}  and clicks on the login button', (username,password) => {

  loginPage.login(username,password);
  //cy.url().should('eq', 'http://ips-edge-edge-test.tst-ocpapps.biat.int:8080/mybiat-web/#/products')
 
  
 });


 Then("the url will be redirected to the Dashbord", () => {

  cy.log('hello cypress')  

});


When("A user doesn't enter his username and  password", () => {

  loginPage.failedLogin();

});

Then("the submit button will be disabled", () => {

  loginPage.disabledButton();

});

Then("An error mesage is displayed on a popup", () => {

  cy.get('.toast-title').should('have.text', 'Veuillez vérifier vos paramètres d′accès')
 

});