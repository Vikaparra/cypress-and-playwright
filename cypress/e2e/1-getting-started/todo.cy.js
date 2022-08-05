/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress


  
 
  it('displays the "mudar o mundo" session', () => {
    cy.visit('https://pushstart.com.br/pt-BR/blog/category/mudar-o-mundo')
    cy.get('body').find('article')
  })

  it('searches for "São Paulo"', () => {
    cy.get('[placeholder^=Pesquise]').focus()
    cy.focused().type('São Paulo')
    cy.focused().parent().find('button').click()
    cy.get('body').find('article')
  })

  it('searches for "xjfdfis8fgsd"', () => {
    cy.get('[placeholder^=Pesquise]').focus()
    cy.focused().type('xjfdfis8fgsd')
    cy.focused().parent().find('button').click()
    cy.get('body').contains('Oops')
  })

  it('verifies articles categories', () => {
    cy.get('a').contains('Engajamento').click()
    cy.get('body').find('article').then(($articles) => { 
      const engaja = cy.get('article').contains('Engajamento').length

        if($articles.length != engaja){
          throw console.error();
        }
      })
  }
    )
