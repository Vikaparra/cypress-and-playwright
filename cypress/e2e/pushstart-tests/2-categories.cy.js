it('visit pushstart blog and get articles', () => {
    cy.visit('https://pushstart.com.br/pt-BR/blog/')
    .get('body').find('article')
})    
 
it('verifies "Engajamento" in articles', () => {
    cy.get('div').find('a').contains('Engajamento').click()
    .get('body').find('article').each(($li, index, $lis) => {
        cy.get($li).contains('Engajamento')
    })
})

it('verifies "Mudar o Mundo" in articles', () => {
    cy.get('a').contains('Mudar o Mundo').click()
    .get('body').find('article').each(($li, index, $lis) => {
        cy.get($li).contains('Mudar o Mundo')
    })
})

it('verifies "RH Tech" in articles', () => {
    cy.get('a').contains('RH Tech').click()
    .get('body').find('article').each(($li, index, $lis) => {
        cy.get($li).contains('RH Tech')
    })
})

it('verifies "Estúdio" in articles', () => {
    cy.get('a').parent().find('svg').parent().contains('Estúdio').click()
    .get('body').find('article').each(($li, index, $lis) => {
        cy.get($li).contains('Estúdio')
    })
})

// it('verifies "Estúdio" in articles', () => {
//     cy.get('a').contains('Estúdio').find('svg').parent().click()
//     .get('body').find('article').each(($li, index, $lis) => {
//         cy.get($li).contains('Estúdio')
//     })
// })

// it('verifies "Estúdio" in articles', () => {
//     cy.get('button').contains('Pesquise').find('a').contains('Estúdio').click()
//     .get('body').find('article').each(($li, index, $lis) => {
//         cy.get($li).contains('Estúdio')
//     })
// })

it('verifies "Gamificação" in articles', () => {
    cy.get('a').contains('Gamificação').click()
    .get('body').find('article').each(($li, index, $lis) => {
        cy.get($li).contains('Gamificação')
    })
})
