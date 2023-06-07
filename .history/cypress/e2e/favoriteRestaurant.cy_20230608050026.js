describe('positive case', () => {
  it('User Klik Menyukai Restaurant', () => {
    cy.visit('http://localhost:9000/');
    cy.get(':nth-child(1) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.wait(200);
  });
  it('Melihat Restaurant pada Favorite dengan pencarian', () => {
    cy.visit('/#/favorite');
    
  });
})