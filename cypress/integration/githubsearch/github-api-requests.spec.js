describe('Request', () => {
    it('displays a user from github API', () => {
        cy.request('https://api.github.com/users/gstadtler')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('login')
                expect(response.body).to.have.property('public_repos')
                expect(response.body).to.have.property('avatar_url')
                expect(response.body).to.have.property('bio')
                expect(response.body).to.have.property('followers')
                expect(response.body).to.have.property('following')
                expect(response.body).to.have.property('email')
            })
    })

    it('displays the user repositories from github API', () => {
        cy.request('https://api.github.com/users/gstadtler/repos')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.a('array')
                expect(response.body).to.have.length(8)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            })
    })
})