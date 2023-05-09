class SubscriptionPage { 

    


   elements = { 
      firstNameAndLastName : () =>  cy.get('#bb_input_0'),      
      birthDate : () =>  cy.get('#ngbDatepicker'),
      documentType : () =>cy.get('#kc-login'), 
      phoneNumber : () =>cy.get('#bb_input_2'),    
      documentNumber : () =>cy.get('#bb_input_1'),
      mailAdress: () =>cy.get('#bb_input_3'),
      title: "Récapitulatif des données",
  }
    
  dropDownDocType = () =>  {
   cy.get('.custom-id-card > :nth-child(1) > .custom-input > .ng-select-container > .ng-arrow-wrapper').click() ;
   cy.get('.ng-dropdown-panel > :nth-child(1) > :nth-child(2)> :nth-child(1)').click() ;
   }
   
   dropDownIndicatifNumber = () =>  {
      cy.get('.area-input > .ng-select-container').click() ;
      cy.get('.ng-dropdown-panel > :nth-child(1) > :nth-child(2) > :nth-child(1)').click() ;
      }
  
    
   clickOnSignUp = () =>  {
        cy.get('.sign-up').click() ;  
   }

     clickOnStart = () =>  {
        cy.get('.biat-general-button').click() ;  
        cy.url().should('eq', 'http://ips-edge-edge-test.tst-ocpapps.biat.int:8080/mybiat-web/identification#/')
     }


     clickOnCaptcha = () =>  {
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').then($iframe => {
         const $body = $iframe.contents().find('body');
         cy.wrap($body)
        .find("span[role='checkbox']")
        .should('be.visible')
        .click() 
         } )
      }   

      acceptancePage= () =>  {
         cy.get('#bb_input_4').check({force: true});
      cy.get('div.terms-modal-body').scrollTo("bottom");
      cy.get('#accept-terms-btn').should('be.disabled').click();  
    }

     submit = (firstNameAndLastName,birthDate,documentNumber,phoneNumber,mailAdress) =>  {
      this.elements.firstNameAndLastName().type(firstNameAndLastName);
      this.elements.birthDate().type(birthDate);
      this.dropDownDocType();
      this.elements.documentNumber().type(documentNumber);
      this.dropDownIndicatifNumber();
      this.elements.phoneNumber().type(phoneNumber);
      this.elements.mailAdress().type(mailAdress);
      
      this.acceptancePage();
      this.clickOnCaptcha();
      cy.wait(20000);
      cy.get('.biat-general-button').click();
      cy.wait(10000);
      //cy.get(':nth-child(2) > :nth-child(1) > .info').should('have.text', firstNameAndLastName)

     }
    redirectionStep2= () =>  {
      cy.get('.summary-infos-title').should("include", elements.title);   
 }



     
}
export default SubscriptionPage ; 