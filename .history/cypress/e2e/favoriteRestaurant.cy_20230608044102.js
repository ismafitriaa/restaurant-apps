describe('positive case', () => {
  it('Menyukai salah satu restoran', () => {
    cy.visit('http://localhost:9000/')
    cy.click(':nth-child(1) > .post-item__content > .post-item__title > a')

  })
})