import { homePage } from "../pages/homePage/homePage";

describe("Do login test", () => {
  it("Sucessfull login", () => {
    homePage.visit();
    homePage.search("Brocolli");
    homePage.addCard();
    // cy.pause();
    // homePage.search("Cucumber");
    // homePage.addCard();
  });
});
