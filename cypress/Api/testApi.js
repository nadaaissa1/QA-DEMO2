class LoginApi{

    static clientProfile = (token) => {
            
        return cy.request({
           url:'http://ips-edge-edge-test.tst-ocpapps.biat.int:8080/api/user-manager/client-api/v2/users/me/profile',
           method:'GET'  ,
           failOnStatusCode: false,
           headers: {

            "Authorization": `bearer ${token}` ,
            "content-type" : "application/x-www-form-urlencoded"

        } ,
           
                
            
    
          })
       }

       
   static login = () => { 
   return cy.request({
        method:"POST", 
        url: "http://172.28.91.20:8080/auth/realms/biat-retail/protocol/openid-connect/token",
        // in case of error 
        failOnStatusCode:false ,

        body: { 
            "username":"omar.laamari@value.com.tn",

            "password":"ValueBIAT.2020",
           
            "grant_type":"password",
           
            "scope":"openid",
           
            "client_id":"bb-tooling-client" 
       },

       headers: { 
     
           "content-type" : "application/x-www-form-urlencoded"
       } ,


    })

   
}


}


export default LoginApi