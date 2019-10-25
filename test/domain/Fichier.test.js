const Fichier = require('../../src/domain/Fichier');

describe("Domain | Fichier", () => {
  describe("createFromPath", () => {
    it("should return a well construct Fichier from a path", () => {
      // given
      const cheminAbsolu = __dirname + "/../directory-for-test/domain/FichierDuProjet.js";
      const expectedCheminRelatif = "./../directory-for-test/domain/FichierDuProjet.js";
      const expectedNom = "FichierDuProjet.js";
      // when
      const result = Fichier.createFromPath(cheminAbsolu, __dirname);
      // then
      expect(result.cheminAbsolu).toEqual(cheminAbsolu);
      expect(result.cheminRelatif).toEqual(expectedCheminRelatif);
      expect(result.nom).toEqual(expectedNom);
    });
  });
});