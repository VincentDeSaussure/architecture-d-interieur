const GitIgnore = require('../../src/domain/GitIgnore');
const GitIgnoreBuilder = require('../builder/GitIgnoreBuilder');

describe('GitIgnore', () => {

  const expectedListeDansLeGitIgnore = [".git", ".idea", ".gitignore"];
  const gitIgnoreFileForTest = new GitIgnoreBuilder();
  gitIgnoreFileForTest.assigneLaListeAEcrire(expectedListeDansLeGitIgnore);
  gitIgnoreFileForTest.build();
  const path = __dirname + '/../builder';
  const nom = '.gitignore';
  const id = 1;
  const data = {
    id: id,
    nom: nom,
    path: path
  }

  describe('contient', () => {
    it('doit retourner les informations contenu dans le gitignore', () => {
      // given
      const expectedList = expectedListeDansLeGitIgnore;
      const gitIgnore = new GitIgnore(data);
      //when
      const result = gitIgnore.contient();
      // then
      expect(result).toEqual(expectedList);
    })
  })
})
