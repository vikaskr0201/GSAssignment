export default(cy)=>({
    loginButton :'.button__label',
    clickLoginButton(){
        cy.get(this.loginButton).click();
    }
})

