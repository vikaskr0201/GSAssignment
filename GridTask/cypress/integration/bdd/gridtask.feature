Feature: End to End Test for Grid Singularity QA Assignment

    ***Automated Test Suite - tests basic operations of d3a.io***

    Scenario: TC-001 Precreated user is able to login
    Given I open d3a.io landing page
    When I successfully enter the precreated user credentials 
    Then Able to login

    Scenario: TC-002 Precreated user is able to create project
    Given I open d3a.io landing page
    When I successfully enter the precreated user credentials 
    Then Able to create the project

    Scenario: TC-003 Precreated user is able to create simulation
    Given I open d3a.io landing page
    When I successfully enter the precreated user credentials 
    And Able to create the project
    Then Able to create the simulation for the above created project

    
   
    
