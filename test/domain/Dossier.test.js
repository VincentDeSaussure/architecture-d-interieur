const Dossier = require('../../src/domain/Dossier');
const fs = require("fs-extra");

describe('Dossier', () => {
  describe('constructor', () => {
    it("a le bon path", () => {
      // given
      const path = '/../test/directory-for-test';
      const nom = "directory-with-gitignore";
      const data = {
        nom: nom,
        path: path
      };
      const expectedPath = "/../test/directory-for-test/directory-with-gitignore";
      // when
      const dossier = new Dossier(data);
      // then
      expect(dossier.getPath()).toEqual(expectedPath);
    });
  });
  describe("initialiseLesElements", () => {
    it("retourne une liste d'élément dont le type et le nom sont renseignés", () => {
      // given
      const expectedFiles = [".gitignore", "domain", "file1.js", "node_modules_stub"];
      const path = __dirname + '/../directory-for-test';
      const nom = "directory-with-gitignore";
      const data = {
        nom: nom,
        path: path
      };
      const dossier = new Dossier(data);
      // when
      dossier.initialiseLesElements();
      const result = dossier.getElements();
      // when
      expect(result).toEqual(expectedFiles);
    });
  });
});