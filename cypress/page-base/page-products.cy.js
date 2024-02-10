class ProductsPage {
    static PRODUCT =  'Productos'
    static NEW_PRODUCT = '#root > section > main > div.page-loans > div > div > div > div > div > div > div.mb-24 > button > span:nth-child(2)'
    static INPUT_NAME = '[id="basic_productName"]'  
    static DROP_TYPE_PERSON = '[id="basic_customerType"]'
    static TYPE_PERSON = '.ant-select-item-option-content'
    static DROP_COUNTRY = '[id="basic_country"]'
    static COUNTRY = '.ant-select-item-option-content'
    static MINUMUM_AMOUNT = '[id="basic_minimumAmount"]'
    static MAXIMUM_AMOUNT = '[id="basic_maximumAmount"]'
    static MAXIMUM_TERM = '[id="basic_maximumTerm"]'
    static PAYMENT_FRECUENCY = '[id="basic_paymentFrequency"]'
    static CURRENT_INTEREST =  '[id="basic_currentInterest"]'
    static PAST_DUE_INTEREST = '[id="basic_pastDueInterest"]'
    static UPFRONT_FIXED_FEE = '[id="basic_upfrontFixedFee"]'
    static UPFRONT_VARIABLE_FEE = '[id="basic_upfrontVariableFee"]'
    static CRETE_PRODUCT = '#basic > button > span'

    static createProduct(name, minimumAmount, maximumAmount, maximumTerm, paymentFrecuency, currentInterest, 
        pastDueInterest, upFrontFixedFee, upfrontVariableFee) {
        cy.contains(this.PRODUCT).click(); 
        cy.get(this.NEW_PRODUCT).click();
        cy.wait(1000)
        cy.reload();
        cy.wait(1000)
        cy.get(this.NEW_PRODUCT).click();
        cy.get(this.INPUT_NAME).clear().type(name);
        cy.get(this.DROP_TYPE_PERSON).click();
        cy.get(this.TYPE_PERSON).contains('Jurídica').click();
        cy.get(this.DROP_COUNTRY).click();
        cy.get(this.COUNTRY).contains('Colombia').click();
        cy.get(this.MINUMUM_AMOUNT).clear().type(minimumAmount);
        cy.get(this.MAXIMUM_AMOUNT).clear().type(maximumAmount);
        cy.get(this.MAXIMUM_TERM).clear().type(maximumTerm);
        cy.get(this.PAYMENT_FRECUENCY).clear().type(paymentFrecuency);
        cy.get(this.CURRENT_INTEREST).clear().type(currentInterest);
        cy.get(this.PAST_DUE_INTEREST).clear().type(pastDueInterest);
        cy.get(this.UPFRONT_FIXED_FEE).clear().type(upFrontFixedFee);
        cy.get(this.UPFRONT_VARIABLE_FEE).clear().type(upfrontVariableFee);
        cy.get(this.CRETE_PRODUCT).click({force: true})

    }
  }
  
  export default ProductsPage;