

cy.intercept('www.test.com/users').as('nada') ; 

   cy.get('input').type('aaa')
   cy.get('input').type('aaa')
   cy.get('button').click() 

   cy.wait('@nada').then((response)=> { 
      
      var cards  ; 
      var counter = 0 
            expect(response.body.status).to.eql(200) 
      
            cards = response.body.array  

            cards.forEach(element => {
                        counter = counter + element  

            });

            cy.log


   }
    )