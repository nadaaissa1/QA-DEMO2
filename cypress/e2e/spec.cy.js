describe('template spec', () => {
  it('gets a list of users', () => {
    cy.request({
      url: "http://172.28.91.20:8080/auth/realms/biat-retail/protocol/openid-connect/token",
      method:"POST ", 
      body: { 
        email: "gets a list of users",
        password: "gets a list of users",
      },
  })
})
});
