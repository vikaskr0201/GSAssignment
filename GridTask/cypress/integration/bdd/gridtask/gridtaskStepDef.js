import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; 
import landingPage from '../../pageObjects/LandingPage.js';
import loginPage from '../../pageObjects/LoginPage.js';
import homePage from '../../pageObjects/HomePage.js';
var landingPages;
var loginPages;
var homePages;


Given('I open d3a.io landing page',function(){

    cy.visit(Cypress.env('url'));
})

When('I successfully enter the precreated user credentials',function(){

    userLogin(this.data.email, this.data.password);
   
})
Then('Able to login', function(){
  homePages=homePage(cy);
  homePages.validateSuccesslLogin("Home");
})

And('Able to create the project',function(){
  
    homePages = homePage(cy);
    homePages.clickNewProject();
    createProject(this.name,this.description);
})
Then('Able to create the simulation for the above created project',function(){
    homePages.clickCreatedProject();
    cy.get('.configurations > .button').click();
    createSimulation(this.name, this.description);
})


function userLogin(email, password){
    landingPages = landingPage(cy);
    cy.visit(Cypress.env('url'));
    landingPages.clickLoginButton();
    loginPages=loginPage(cy);
    loginPages.typeEmail(email);
    loginPages.typePassword(password);
    loginPages.clickLogin();

  }


  function createProject(pName, pDescription){
    var pName="TestProj-"+getRandomString(4);
    var pDescription="Creating a test project";
    homePages.typeName(pName);
    homePages.typeDescription(pDescription);
    homePages.clickAdd();
    homePages.validateProjectCreation(pName);

  }


  function createSimulation(){

    var simulationName = "TestSim-" + getRandomString(4);
    var simulationDescription = "Creating a simulation for the project";
    homePages.typeName(simulationName);
    homePages.typeSimDescription(simulationDescription);
    homePages.clickNext();
    homePages.validateSimulationCreation(simulationName);
  }


  function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}