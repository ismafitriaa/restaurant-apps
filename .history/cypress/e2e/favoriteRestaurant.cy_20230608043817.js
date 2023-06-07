describe('positive case', () => {
  beforeEach(function () {
    cy.fixture("scenario").then(function (data) {
        this.data = data;
    });
});

  it('passes', () => {
    cy.visit('http://localhost:9000/')
  })
})