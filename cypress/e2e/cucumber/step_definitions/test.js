import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  LoginApi from "../../../Api/testApi";

var token ; 

beforeEach(() => {
 
    LoginApi.login().then((response) => {

        token = response.body.access_token ;
       
        console.log(token) ; 
        expect(response.status).to.eq(200);
     
    
    })  

})


Given('A user can login to myBiat Retail', () => {
   
        
    LoginApi.clientProfile(token).then((response) => {
        nameClient = response.body.fullName  ; 
        cy.log('this is client name' , nameClient) ; 

    }) ;
    });
   
   


   



   
