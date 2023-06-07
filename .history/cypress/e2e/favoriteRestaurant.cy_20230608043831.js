describe('positive case', () => {
  beforeEach(function () {
    cy.fixture("scenario").then(function (data) {
        this.data = data;
    });
});

  it('Menyukai salah satu restoran', () => {
    cy.visit('http://localhost:9000/')
  })
})