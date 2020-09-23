/// <reference types="cypress" />

describe('signup', () => {
    it('must signup', () => {
        cy.visit('http://localhost:4200/authentication/signup');
        
        cy.get('#signupName').type('Tales Tales');
        cy.get('#signupEmail').type('talestales@talestales.com');
        cy.get('#signupPassword').type('123');
        cy.get('#signupPasswordConfirmation').type('123');
        cy.get('.btn-primary').click();
    });
});