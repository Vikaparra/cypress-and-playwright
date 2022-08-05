it('visit pushstart blog and get articles', () => {
    cy.visit('https://pushstart.com.br/pt-BR/blog/')
    .get('body').find('article')
})    

it('searches for "São Paulo"', () => {
    cy.get('[placeholder^=Pesquise]').focus()
    .focused().type('São Paulo')
    .focused().parent().find('button').click()
    .get('body').find('article')
})

it('searches for "Campinas"', () => {
    cy.get('[placeholder^=Pesquise]').focus()
    .focused().type('Campinas{enter}')
    .get('body').contains('Oops')
})
