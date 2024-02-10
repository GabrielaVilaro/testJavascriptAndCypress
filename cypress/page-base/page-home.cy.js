class HomePage {

    static ADM_WALLET = '#root > section > main > div:nth-child(2) > div > div > div > a:nth-child(3) > div > div'
    static CLIENT_SELECCITION = '#root > section > main > div:nth-child(2) > div > div > div > div > div.ant-card-body > div > div.summary-card.summary-card-clients > div > button > span'

    static getClientSection() {
        cy.get(this.ADM_WALLET).click()
        cy.get(this.CLIENT_SELECCITION).click()
      }
}

export default HomePage;