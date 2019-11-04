const extraitLesDependancesDuFichier = require("../../src/adaptateur/extracteur-de-dependances");

describe("Adaptateur | extracteurDeDependances", () => {
  it("matches a require dependance from test file", () => {
    // given
    const cheminAbsolu = __dirname + "/../directory-for-test/domain/ElementDuProjet.js";
    const expectedDependances = "const Projet = require(\"./Projet\")";
    // when
    const result = extraitLesDependancesDuFichier(cheminAbsolu);
    // then
    expect(result[0]).toEqual(expectedDependances);
  });

  it("matches two require dependance from test file", () => {
    // given
    const cheminAbsolu = __dirname + "/../directory-for-test/domain/ElementDuProjetAvecDeuxDependances.js";
    const expectedDependance1 = "const Projet = require(\"./Projet\")";
    const expectedDependance2 = "const Projet2 = require(\"./Projet2\")";
    const arraysDeDependances = [expectedDependance1, expectedDependance2];
    // when
    const result = extraitLesDependancesDuFichier(cheminAbsolu);
    // then
    expect(result).toEqual(arraysDeDependances);
  });
});