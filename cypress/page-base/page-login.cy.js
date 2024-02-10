class LoginPage {
    static INPUT_EMAIL =  '[id="basic_email"]'
    static INPUT_PASS = '[id="basic_password"]'
    static BTN_ACCESS = '#basic > div:nth-child(5) > div > div > div > div > button'
  
    static login(email, password) {
      cy.get(this.INPUT_EMAIL).clear().type(email);
      cy.get(this.INPUT_PASS).clear().type(password);
      cy.get(this.BTN_ACCESS).click();
    }
  }
  
  export default LoginPage;
