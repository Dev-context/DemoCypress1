import elements from "./homePage_elements.json";

class HomePage {
  visit() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  }

  search(name) {
    searching(name);
  }

  addCard() {
    cy.intercept({
      method: "get",
      url: "*/seleniumPractise/data/*",
    }).as("getProductList");

    // cy.wait("@getProductList");
    cy.get(elements.productList)
      .find(".product")
      .each(($el, index) => {
        cy.wrap($el).find("button").contains("ADD TO CART").click();
      });
  }

  removeCard() {}

  increaseadProduct() {}

  decreaseadProduct() {}
}

function searching(name) {
  cy.get(elements.seaching_ipt).type(name);
  cy.log(`Type the ${name}`);
  cleanSearching();
}

function cleanSearching() {
  cy.get(elements.seaching_ipt).invoke("val", "");
}
export const homePage = new HomePage();
