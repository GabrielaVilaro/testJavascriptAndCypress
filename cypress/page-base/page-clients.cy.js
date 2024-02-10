class ClientsPage {
    static INPUT_CLIENT = '[id="organizationCustomerId"]'
    static DROP_COUNTRY = '[id="country"]'
    static COUNTRY = 'Colombia'
    static INPUT_LEGAL_NAME = '[id="legalName"]'
    static INPUT_NAME = '[id="contactName"]'
    static INPUT_AMOUNT = '[id="approvedAmount"]'
    static INPUT_PHONE = '[id="mobileNumber"]'
    static INPUT_EMAIL = '[id="emailAddress"]'
    static CREATE_CLIENT_BUTTON = '#new-customer > button'
    static CREATE_CLIENT_TEXT = 'Crear Cliente';
    static POP_UP_CREATED = "Cliente creado correctamente"
  
    static createClient(organizationCustomerId, legalName, name, amount, phone, email){
      cy.contains(this.CREATE_CLIENT_TEXT).click(); 
      cy.get(this.INPUT_CLIENT).clear().type(organizationCustomerId);
      cy.get(this.DROP_COUNTRY).click();
      cy.contains(this.COUNTRY).click(); 
      cy.get(this.INPUT_LEGAL_NAME).clear().type(legalName);
      cy.get(this.INPUT_NAME).clear().type(name);
      cy.get(this.INPUT_AMOUNT).clear().type(amount);
      cy.get(this.INPUT_PHONE).clear().type(phone);
      cy.get(this.INPUT_EMAIL).clear().type(email);
      cy.get(this.CREATE_CLIENT_BUTTON).click();
    
    }
  }
  
  export default ClientsPage;
  