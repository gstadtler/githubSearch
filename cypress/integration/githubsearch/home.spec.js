describe('Home page tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.clearCookies();
        cy.reload(true);
    });

    afterEach(() => {
        cy.clearCookies();
    });

    it('contains the correct app name', () => {
        cy.contains('GitHubSearch').should('to.have.length', 1);
    });

    it('should have a username field', () => {
        cy.get('[data-cy=text-area]');
    });

    it('should have a search button', () => {
        cy.get('[data-cy=submit-btn]');
    });

    it('should search for a user and redirect to the results page', () => {
        cy.get('[data-cy=text-area]').type('gstadtler');
        cy.get('[data-cy=submit-btn]').click();
        cy.location('pathname').should('eq', '/user-info');
    });
    
    it('should fail search when the username is incorrect or inexistent', () => {
        cy.get('[data-cy=text-area]').type('gstadtler2');
        cy.get('[data-cy=submit-btn]').click();
        cy.location('pathname').should('eq', '/');
    });

    it('should throw a friendly error message when search fails', () => {
        cy.get('[data-cy=text-area]').type('gstadtler2');
        cy.get('[data-cy=submit-btn]').click();
        cy.location('pathname').should('eq', '/');
        cy.get('[data-cy=popup]');
        cy.contains('O usuário não foi encontrado!').should('to.have.length', 1);
    });

    it('popup should have a close button and it should works', () => {
        cy.get('[data-cy=text-area]').type('gstadtler2');
        cy.get('[data-cy=submit-btn]').click();
        cy.get('[data-cy=popup]');
        cy.get('[data-cy=close-popup-btn]').click();
    });
});