describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("should display login page correctly", () => {
    cy.get('input[placeholder="Email"]').should("be.visible");
    cy.get('input[placeholder="Password"]').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("should display alert when email is empty", () => {
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it("should display alert when password is empty", () => {
    cy.get('input[placeholder="Email"]').type("test@gmail.com");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it("should display alert when email or password are wrong", () => {
    cy.get('input[placeholder="Email"]').type("test@gmail.com");
    cy.get('input[placeholder="Password"').type("wrongpassword");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("email or password is wrong");
    });
  });

  it("should display homepage when email and password are correct", () => {
    cy.get('input[placeholder="Email"]').type("testtest@gmail.com");

    cy.get('input[placeholder="Password"]').type("testtest");

    cy.get("button")
      .contains(/^Login$/)
      .click();
    cy.get("nav")
      .contains(/^Society$/)
      .should("be.visible");
    cy.get("button").contains("Logout").should("be.visible");
  });
});
