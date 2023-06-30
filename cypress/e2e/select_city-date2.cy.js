describe('Select city and date', () => {
    it('finds the content dropdown', () => {
      cy.visit('/')
      cy.get('#citySelection').select('Glasgow')
      cy.get('#dateSelect').select(6)
    })
  })