# GSAssignment : Solution for the test assignment

## Frameworks Details 
This framework is based on:
Cypress (https://www.cypress.io/)
cypress-cucumber-preprocessor (https://www.npmjs.com/package/cypress-cucumber-preprocessor  )
multiple-cucumber-html-reporter (https://www.npmjs.com/package/multiple-cucumber-html-reporter )

## Prerequisite 
Latest node version should be installed, please check using 

```node --version```

## Running the Project

Before running please make sure you are under project root directory under ```GridTask``` directory ```cd GridTask``` after cloning the project

```npm install```

Install Cypress 

```npm install cypress --save-dev```

```cypress run --spec cypress/integration/bdd/gridtask.feature --headed --browser chrome```

## To generate the reports

```node cucumber-html-report.js ```

### Reports will be generated 
The reports can be generated under ```./reports/cucumber-report.html``` Refer the ```index.html``` for the cucumber reports.

