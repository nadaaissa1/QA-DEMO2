Feature: login

Background: Logging in
    Given A web browser is at the MyBiat Retail login page
  Scenario: visiting the frontpage
    
    When A user enters "<username>" and  "<password>"  and clicks on the login button
    Then the url will be redirected to the Dashbord


     Examples:
    | username                     |  password       | 
    | omar.laamari@value.com.tn    |  ValueBIAT.2020 |    
 
 Scenario: MBWR-2 : Login screen - inactive login button when login fields are empty
 
 When A user doesn't enter his username and  password
 Then the submit button will be disabled 


  Scenario: MBWR : Login screen - unhappy flow with wrong password and username
  When A user enters "<username>" and  "<password>"  and clicks on the login button
  Then An error mesage is displayed on a popup
  Examples:
    | username                     |  password       | 
    | omar.laamari@value.com       |  ValueBIAT.2    |  


  Scenario: MBWR : Login screen - User try to login with a new password 