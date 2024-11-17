const loginPage = require("../pages/loginPage/login.page");

describe("Do login test", () => {
  it("Sucessfull login", () => {
    const lg = new loginPage();
    lg.visit();
    lg.login("roni_cost@example.com", "roni_cost3@example.com");
  });
});
