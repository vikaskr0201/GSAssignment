export default(cy)=>({
    email: '#email',
    password: '#password',
    login :'.button',
typeEmail(email){
    cy.get(this.email).type(email);
    
},
typePassword(password){
    cy.get(this.password).type(password);
},
clickLogin(){
        cy.get(this.login).click();
    }
})
