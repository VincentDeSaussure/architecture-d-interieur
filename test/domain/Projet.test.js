const Projet = require('../../src/domain/Projet');
const Dossier = require('../../src/domain/Dossier');
const Fichier = require('../../src/domain/Fichier');
const GitIgnore = require('../../src/domain/GitIgnore');

describe('Projet', () => {
  describe('initialise les elements', () => {
    describe("retourne une liste d'élément dont le type et le nom sont renseignés", () => {
      it("avec gitignore", () => {
        // given
        const expectedFiles = [".gitignore", "domain", "file1.js", "node_modules_stub"];
        const path = '/../../test/directory-for-test/directory-with-gitignore';
        const projet1 = new Projet(path);
        // when
        projet1.initialiseLesElements();
        const result = projet1.getElements();
        // then
        expect(result.length).toEqual(4);
        expect(result[0].getNom()).toEqual(expectedFiles[0]);
        expect(result[0] instanceof GitIgnore).toBeTruthy();
        expect(result[1].getNom()).toEqual(expectedFiles[1]);
        expect(result[1] instanceof Dossier).toBeTruthy();
        expect(result[2].getNom()).toEqual(expectedFiles[2]);
        expect(result[2] instanceof Fichier).toBeTruthy();
        expect(result[3].getNom()).toEqual(expectedFiles[3]);
        expect(result[3] instanceof Dossier).toBeTruthy();
      });
    });
  });

  describe('explore', () => {
    it("retourne une liste d'élément dont le type et le nom sont renseignés, en considerant les restriction du gitignore", () => {
      // given
      const expectedFiles = ["domain", "file1.js"];
      const path = '/../../test/directory-for-test/directory-with-gitignore';
      const projet1 = new Projet(path);
      // when
      projet1.explore();
      const result = projet1.getElements();
      // then
      expect(result.length).toEqual(2);
      expect(result[0].getNom()).toEqual(expectedFiles[0]);
      expect(result[0] instanceof Dossier).toBeTruthy();
      expect(result[1].getNom()).toEqual(expectedFiles[1]);
      expect(result[1] instanceof Fichier).toBeTruthy();
    });
  });
});