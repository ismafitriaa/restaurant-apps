describe('positive case', () => {
  it('User Klik Menyukai Restaurant', () => {
    cy.visit('http://localhost:9000/');
    cy.get(':nth-child(1) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get('[data-id="home"]').click();
    cy.get(':nth-child(2) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get(':nth-child(3) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get(':nth-child(4) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get(':nth-child(5) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.wait(200);
  });
  it('Melihat Restaurant pada Favorite dengan pencarian', () => {
    cy.visit('http://localhost:9000/#/favorite');
    cy.get('#query').type('Melting Pot').type('{enter}');
  });
})