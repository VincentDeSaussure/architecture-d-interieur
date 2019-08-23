const fs = require('fs-extra');
const restrictionList = require('../../model/restrictionList');
const typeDElement = require('../../model/typeDElement');
const Projet = require('../../domain/Projet');

describe('Projet', () => {
  describe("explore", () => {
    it("doit retourner une liste d'élément dont le type et le nom sont renseigné", () => {
      // given
      const expectedFiles = ["directory-with-gitignore", "file1.js"];
      const path = '/../test/directory-for-test';
      const projet1 = new Projet(path, fs, restrictionList);
      // when
      const result = projet1.explore();
      // then
      expect(result[0].name).toEqual(expectedFiles[0]);
      expect(result[0].type).toEqual(typeDElement.DIRECTORY);
      expect(result[1].name).toEqual(expectedFiles[1]);
      expect(result[1].type).toEqual(typeDElement.FILE);
    });
  });
});