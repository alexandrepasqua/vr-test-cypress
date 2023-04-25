describe('vr-site-map', () => {
  it('passes', () => {
    cy.visit('https://www.vr.com.br') //Visitar a pagina
    cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click() //Fazer o aceite dos termos
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click() //Clicar no link do "Prá você"
    cy.get('.vr-hero__actions > .vr-button--negative').click() //Clicar no botão "Onde usar meu cartão VR"
    cy.get('.vr-container__mapa').should('be.visible') //Verificar se o mapa esta visivel
  })
})