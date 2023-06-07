describe('positive case', () => {
  beforeEach(() => {
    // Pastikan restoran tidak ditandai sebagai favorit sebelum setiap tes
    cy.visit('http://localhost:9000/#/favorite');
    cy.get('#favoriteButton').then(($btn) => {
      if ($btn.hasClass('favorited')) {
        $btn.click();
      }
    });
  it('User Klik Menyukai Restaurant', () => {
    cy.visit('http://localhost:9000/');
    cy.get(':nth-child(1) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get('.nav__list > :nth-child(1) > a').click({force: true});
    cy.get(':nth-child(2) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get('.nav__list > :nth-child(1) > a').click({force: true});
    cy.get(':nth-child(3) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get('.nav__list > :nth-child(1) > a').click({force: true});
    cy.get(':nth-child(4) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.get('.nav__list > :nth-child(1) > a').click({force: true});
    cy.get(':nth-child(5) > .post-item__content > .post-item__title > a').click();
    cy.get('#favoriteButton').click();
    cy.wait(200);
  });
  it('Melihat Restaurant pada Favorite dengan pencarian', () => {
    cy.visit('http://localhost:9000/#/favorite');
    cy.wait(300);
    cy.get('#query').type('Melting Pot').type('{enter}');
  });

  it('User Klik Tidak menyukai Restaurant', () => {
    cy.visit('http://localhost:9000/#/favorite');
    cy.wait(300);
    cy.get('.post-item__title > a').click({force: true});
    cy.get('#favoriteButton').click();
    cy.get('.nav__list > :nth-child(2) > a').click({force: true}); 
  });
})