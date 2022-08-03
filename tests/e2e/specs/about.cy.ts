describe('About', () => {
  it('visits /about url', () => {
    cy.visit('/about')
    cy.contains('h1', 'This is an about page')
  })
})
