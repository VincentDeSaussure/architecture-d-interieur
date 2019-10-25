const fichierFromPathAdaptateur = require("../../src/adaptateur/fichier-from-path-adaptateur");

describe("Adaptateur | fichierFromPath", () => {
  describe("createCheminRelatifFromCheminAbsolu", () => {
    it("should return a chemin relatif from chemin absolu", () => {
      // given
      const cheminAbsolu = __dirname + "/../directory-for-test/domain/FichierDuProjet.js";
      const expectedCheminRelatif = "./../directory-for-test/domain/FichierDuProjet.js";
      // when
      const result = fichierFromPathAdaptateur.createCheminRelatifFromCheminAbsolu(cheminAbsolu, __dirname);
      // then
      expect(result).toEqual(expectedCheminRelatif);
    });
  });
  describe("extraitNomDuCheminAbsolu", () => {
    it("return nom du fichier depuis le chemin absolu", () => {
      // given
      const cheminAbsolu = __dirname + "/../directory-for-test/domain/FichierDuProjet.js";
      const expectedNom = "FichierDuProjet.js";
      // when
      const result = fichierFromPathAdaptateur.extraitNomFromCheminAbsolu(cheminAbsolu);
      // then
      expect(result).toEqual(expectedNom)
    });
  });
  describe("extraitLesDependancesDuFichier", () => {
    it("return les dependances du fichier depuis le chemin absolu", () => {
      // given
      const cheminAbsolu = __dirname + "/../directory-for-test/domain/ElementDuProjet.js";
      const expectedDependances = [];
      // when
      const result = fichierFromPathAdaptateur.extraitLesDependancesDuFichier(cheminAbsolu);
      // then
      expect(result).toEqual(expectedDependances);
    });
  });
});
