
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')

    cy.get("input[name=search]").should(
      "have.attr",
      "placeholder",
      "Pesquisar na Wikipédia"
    );
  })

  
})