describe("Google Search Page", () => {
    beforeEach(function () {
        cy.visit("http://localhost:3000/google.html");
    });

    it("Should have an exernal CSS file", () => {
        cy.get("link").invoke("attr", "href").should("eq", "google.css");
    });

    it("Should have Google title", () => {
        cy.title().should("eq", "Google");
    });

    it("Should have an input", () => {
        let element = cy.get("input[type=text]");
        element.invoke("attr", "type").should("eq", "text");
    });

    // Focus test not working
    // it("Should have the input defaulted to focus", () => {
    //   cy.focused().should("have.attr", "name", "search");
    // });
});
