describe('When there are results after searching', () => {
    before(() => {
        cy.visit('/');
        cy.clearCookies();
        cy.get('[data-cy=text-area]').type('gstadtler');
        cy.get('[data-cy=submit-btn]').click();
        cy.location('pathname').should('eq', '/user-info');
    });

    it('contains the correct app name', () => {
        cy.contains('GitHubSearch').should('to.have.length', 1);
    });

    it('should have a read only username field', () => {
        cy.get('[data-cy=username]').should('have.value', 'gstadtler');
    });

    it('should have a profile card with user informations', () => {
        cy.get('[data-cy=profile]');
        cy.contains('@gstadtler').should('to.have.length', 1);
        cy.get('[data-cy=email]');
        cy.get('[data-cy=followers]');
        cy.get('[data-cy=following]');
        cy.get('[data-cy=bio]');
    });

    it('should have repositories cards with its information',() => {
        cy.get('[data-cy=repositories]');
        cy.contains('githubSearch').should('to.have.length', 1);
        cy.get('[data-cy=name]');
        cy.get('[data-cy=stars]');
    });
});