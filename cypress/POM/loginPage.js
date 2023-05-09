class LoginPage {

    elements = { 
        usernameInput : () =>  cy.get('#username'),      
        passwordInput : () =>  cy.get('#password'),    
        loginBtn : () =>cy.get('#kc-login'),
        
    }


    visit = () =>  {
       cy.visit('/') ;  
    }

    login = (username,password) => {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password).invoke('val')
        .should((value) => {
          expect(value).to.not.contain('password')
        })
    
        this.elements.loginBtn().click();
        //cy.url().should('eq', 'http://ips-edge-edge-test.tst-ocpapps.biat.int:8080/mybiat-web/#/products')
    }

    failedLogin= () =>  {
        this.elements.usernameInput().should('have.value', '');
        this.elements.passwordInput().should('have.value', '');
        


     }

     disabledButton = () =>  {
        this.elements.loginBtn().should('be.disabled') ;
     }
  


  
}
 export default LoginPage ; 