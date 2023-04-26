describe('vr-site-map', () => {
  it('passes', () => {
    //Visitar a pagina da VR
    cy.visit('https://www.vr.com.br') 
    
    //Fazer o aceite dos termos
    cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click() 

    //Clicar no link do "Prá você"
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click() 

    //Clicar no botão "Onde usar meu cartão VR"
    cy.get('.vr-hero__actions > .vr-button--negative').click() 

    //Verificar se o mapa esta visivel
    cy.get('.vr-container__mapa').should('be.visible') 

  })
})