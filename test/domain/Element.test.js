const Element = require("../../domain/Element");
const typeDElement = require("../../model/typeDElement");

describe("Element", () => {
  it("connait son type", () => {
    // given
    const nomDeFichier = ".gitignore";
    // when
    const element = new Element(nomDeFichier);
    // then
    expect(element.type).toBe(typeDElement.GITIGNORE);
  })
})