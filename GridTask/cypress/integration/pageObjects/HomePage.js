export default(cy)=>({
    home: '.header > .headline',
    project: '.button--accent > .button__label',
   validateSuccesslLogin(homeText){
    cy.get(this.home)
    .contains(homeText)
    },
    clickNewProject() {
        cy.wait(2000);
        cy.visit("https://www.d3a.io/projects");
        cy.get(this.project).click();
    
    },

    inputName: '#input-field-name', //common for both project and description
    inputDescription: '#textarea-field-nameTextArea', // for project description
    inputSimDescription: '#textarea-field-description', // for simulation description
    add :'.library-name-modal__container > .button',
    next: '.button',
typeName(inputName){
    cy.get(this.inputName).clear().type(inputName);
    
},
typeDescription(inputDescription){
    cy.get(this.inputDescription).type(inputDescription);
},
typeSimDescription(inputSimDescription){
    cy.get(this.inputSimDescription).type(inputSimDescription);
},

clickAdd(){
        cy.get(this.add).click();
    },

clickNext(){
        cy.get(this.next).click();
    },

validateProjectCreation(inputName){
    cy.wait(3000);
    cy.get(':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__name__text').contains(inputName);
},

clickCreatedProject(){
    cy.wait(2000);
    cy.get(':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__carat > .svg-icon > .icon-carat').click();
},
validateSimulationCreation(inputName){
cy.wait(2000);
cy.visit("https://www.d3a.io/projects");
cy.get(':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__carat > .svg-icon > .icon-carat > use').click();
cy.get('.saved-config--pct-width__title__name > p').contains(inputName)
}
})