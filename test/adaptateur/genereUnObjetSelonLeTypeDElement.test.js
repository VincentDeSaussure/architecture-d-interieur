const genereUnObjetSelonLeTypeDElement = require("../../src/adaptateur/genereUnObjetSelonLeTypeDElement");
const Fichier = require("../../src/domain/Fichier");
const Dossier = require("../../src/domain/Dossier");
const GitIgnore = require("../../src/domain/GitIgnore");
const Element = require("../../src/domain/Element");

let counter = 0;
describe("genereUnObjetSelonLeTypeDElement", () => {
  describe("quand l'element == FICHIER", () => {
    it("doit retourner un objet de type file", () => {
      //given
      const nomDuFichier = "text.txt";
      counter = counter++;
      const path = './';
      const data = {
        id: counter,
        nom: nomDuFichier,
        path: path
      };
      // when
      const result = genereUnObjetSelonLeTypeDElement(data);
      // then
      expect(result instanceof Fichier).toBeTruthy();
      expect(result instanceof Element).toBeTruthy();
    });
  });
  describe("quand l'element == DOSSIER", () => {
    it("doit retourner un objet de type dossier", () => {
      //given
      const nomDuDossier = "text";
      counter = counter++;
      const path = './';
      const data = {
        id: counter,
        nom: nomDuDossier,
        path: path
      };
      // when
      const result = genereUnObjetSelonLeTypeDElement(data);
      // then
      expect(result instanceof Dossier).toBeTruthy();
      expect(result instanceof Element).toBeTruthy();
    })
  });
  describe("quand l'element == GITIGNORE", () => {
    it("doit retourner un objet de type dossier", () => {
      //given
      const nomDuGitIgnore = ".gitignore";
      counter = counter++;
      const path = './';
      const data = {
        id: counter,
        nom: nomDuGitIgnore,
        path: path
      };
      // when
      const result = genereUnObjetSelonLeTypeDElement(data);
      // then
      expect(result instanceof GitIgnore).toBeTruthy();
      expect(result instanceof Element).toBeTruthy();
    })
  });
});