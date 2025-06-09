describe('login', () => {
  beforeEach(() => {
    cy.visit('https://auth.wikimedia.org/ptwiki/w/index.php?title=Especial:Entrar&returnto')
  
  })
  it('passes', () => {
    cy.fixture('usuarios.json').then((login) => {
      const user = login[0]
      cy.get('#wpName1').type(user.username);
      cy.get('#wpPassword1').type(user.password);
      cy.get('#wpLoginAttempt').click();
  })
  })
})