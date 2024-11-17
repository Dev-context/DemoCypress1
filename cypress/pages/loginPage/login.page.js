import login_elements from "./login-elements.json";

export default class LoginPage {
  visit() {
    cy.visit(
      "https://magento-demo.mageplaza.com/default/customer/account/login/"
    );
  }

  login(email, password) {
    fillEmail(email);
    fillPassword(password);
    clickLogin();
  }
}

function fillEmail(email) {
  cy.get(login_elements.email_ipt).type(email).should("be.visible");
  cy.log("Fill The e-mail field");
}

function fillPassword(password) {
  cy.get(login_elements.password_ipt).type(password);
  cy.log("Fill The password field");
}

function clickLogin() {
  cy.get(login_elements.btn_signIn_click).click();
  cy.log("Click on Login");
}
