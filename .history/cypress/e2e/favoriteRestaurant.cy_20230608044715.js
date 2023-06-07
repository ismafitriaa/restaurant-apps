describe('positive case', () => {
  it('Menyukai salah satu restoran', () => {
    cy.visit('http://localhost:9000/');
    cy.get(':nth-child(1) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    

  })
})