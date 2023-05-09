Feature: Selfsubscription

 Background: Logging in
    Given A web browser is at the MyBiat Retail login page

Scenario: [MBWR-1454] : Direct redirection to "Create account step"after an incomplete self subcription flow - Version 1 Montrer la chaine de caractères ghost Afficher auteur/modificateur



When  I click on the link for self-subscription and click on Start button 

When I fill my identification datas fields "<firstNameAndLastName>" , "<birthDate>" , "<documentNumber>" , "<phoneNumber>", "<mailAdress>"

Then I will be redirected to Customer Identification Summary

Examples:
    | firstNameAndLastName         | birthDate       |documentNumber      | phoneNumber       |mailAdress       |  
    | Mr Fiche Digital PP           |  14/03/1991    |    19486107        |    54804834       |fiche.digital@gmail.com|


Scenario: [MBWR-1454] : Direct redirection to "Create account step"after an incomplete self subcription flow 



When  I click on the link for self-subscription and click on Start button 

When I fill my identification datas fields "<firstNameAndLastName>" , "<birthDate>" , "<documentNumber>" , "<phoneNumber>", "<mailAdress>"


Examples:
    | firstNameAndLastName         | birthDate       |documentNumber      | phoneNumber       |mailAdress       |  
    | Mr          |  14/05/1996    |    19486107        |    54804834       |fiche@gmail.com|
