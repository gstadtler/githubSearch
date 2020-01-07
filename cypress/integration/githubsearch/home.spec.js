describe('Website home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('contains the correct page name', () => {
        cy.contains('GitHubSearch').should('to.have.length', 1)
    })

    it('should have a username field', () => {
        cy.get('username-field').type('gstadtler')
    })
})