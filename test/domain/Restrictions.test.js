const Restrictions = require('../../domain/Restrictions');
const GitIgnore = require('../../domain/GitIgnore');
const restrictionList = require('../../model/restrictionList');

describe('Restrictions', () => {

  describe('ajoute', () => {
    it(' des restrictions', () => {
      // given
      const expectedListeDeRestrictions = [".git", ".gitignore", "fichierAIgnorer.test"]
      const restrictions = new Restrictions();
      const listeDeFichiersAIgnorer = ['fichierAIgnorer.test'];
      // when
      restrictions.ajoute(restrictionList);
      restrictions.ajoute(listeDeFichiersAIgnorer);
      const result  = restrictions.result();

      // then
      expect(result).toEqual(expectedListeDeRestrictions);
    })

    it("des restrictions à partir d'un gitignore", () => {
      // given
      const expectedListeDeRestrictions = [".git", ".gitignore", ".idea"];
      const path = __dirname + '/../builder';
      const nom = '.gitignore';
      const id = 1;
      const data = {
        id: id,
        nom: nom,
        path: path
      }
      const gitgnore = new GitIgnore(data);
      const restrictions = new Restrictions();
      const listeDeFichiersAIgnorerProvenantDuGitgnore = gitgnore.contient();
      // when
      restrictions.ajoute(restrictionList);
      restrictions.ajoute(listeDeFichiersAIgnorerProvenantDuGitgnore);
      const result  = restrictions.result();

      // then
      expect(result).toEqual(expectedListeDeRestrictions);
    })

    it("des restrinctions et en filtrant les doublons", () => {
      // given
      const expectedListeDeRestrictions = [".git", ".gitignore"]

      const restrictions = new Restrictions();
      restrictions.ajoute(restrictionList);
      const listeDeDoublons = [".gitignore", ".git"]
      restrictions.ajoute(listeDeDoublons);
      // when
      const result  = restrictions.result();

      // then
      expect(result).toEqual(expectedListeDeRestrictions);
    })
  })
})