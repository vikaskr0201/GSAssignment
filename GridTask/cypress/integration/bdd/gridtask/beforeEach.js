beforeEach(function(){
    cy.clearLocalStorage();
    cy.fixture('testdata').then(function (data) {
     this.data = data
     
   })
})