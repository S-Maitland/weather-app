describe('My First Test', () => {
  it('finds the content dropdown', () => {
    cy.visit('/')
    cy.get('select').select('Edinburgh')
  })
})