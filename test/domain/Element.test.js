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

  describe("type === file", () => {
    it("n'est pas parent", () => {
      // given
      const nomDeFichier = 'file.txt';
      // when
      const result = new Element(nomDeFichier);
      // then
      expect(result.type).toEqual(typeDElement.FILE);
      expect(result.parent).toEqual(false);
    })
  })

  describe("type === directory", () => {
    it("est parent", () => {
      // given
      const nomDeFichier = 'document';
      // when
      const result = new Element(nomDeFichier);
      // then
      expect(result.type).toEqual(typeDElement.DIRECTORY);
      expect(result.parent).toEqual(true);
    })
  })
})