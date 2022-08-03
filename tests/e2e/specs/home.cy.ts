describe('Home', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Vite + Vue')
  })
})
