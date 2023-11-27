import 'cypress-xpath';
import homepage from '../pages/SwagLabHomePage';


describe('Login functionality for standard user', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should allow a standard user to log in', () => {
    
    const username = homepage.elements.standard_user();
    const password = homepage.elements.password();
    cy.log(username + "and " + password)
  });
});


