const restrictionList = require('../../model/restrictionList');
const Projet = require('../../domain/Projet');
const Dossier = require('../../domain/Dossier');
const Fichier = require('../../domain/Fichier');
const GitIgnore = require('../../domain/GitIgnore');

describe('Projet', () => {
  describe('initialise les elements', () => {
    describe("retourne une liste d'élément dont le type et le nom sont renseignés", () => {
      it("avec gitignore", () => {
        // given
        const expectedFiles = [".gitignore", "domain", "file1.js", "node_modules_stub"];
        const path = '/../test/directory-for-test/directory-with-gitignore';
        const projet1 = new Projet(path, restrictionList);
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
});