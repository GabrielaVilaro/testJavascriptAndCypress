import LoginPage from '../../page-base/page-login.cy.js'
import BaseTest from '/Users/gabrielavilaro/qa-front-kala/cypress/e2e/test/test-base.js'
import HomePage from '../../page-base/page-home.cy.js'
import ClientPage from '../../page-base/page-clients.cy.js'
import ProductsPage from '../../page-base/page-products.cy.js'
import { generarStringAleatorio } from '../../support/commands.js';
import Constants from '../../support/constants'

beforeEach(() => {
   cy.visit(BaseTest.URL_BASE);
 })

describe('Test Form e2e lenderAdmin', () => {

 it('Launch Browser, login and create customer', () => {

   const stringAleatorio = generarStringAleatorio(10); 

  LoginPage.login(BaseTest.EMAIL, BaseTest.PASS)
  HomePage.getClientSection()

  ClientPage.createClient(stringAleatorio , 
                         Constants.LEGAL_NAME, 
                         Constants.NAME, 
                         Constants.AMOUNT, Constants.PHONE, 
                         Constants.EMAIL)

  cy.contains(ClientPage.POP_UP_CREATED);

  ProductsPage.createProduct(Constants.NAME_PRODUCT, 
                             Constants.MINUMUM_AMOUNT, 
                             Constants.MAXIMUM_AMOUNT, 
                             Constants.MAXIMUM_TERM, 
                             Constants.PAYMENT_FRECUENCY, 
                             Constants.CURRENT_INTEREST,
                             Constants.PAST_DUE_INTEREST,
                             Constants.UPFRONT_FIXED_FEE,
                             Constants.UPFRONT_VARIABLE_FEE);
  

   });

})

