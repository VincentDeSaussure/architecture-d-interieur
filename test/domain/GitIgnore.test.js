const GitIgnore = require('../../domain/GitIgnore');
const GitIgnoreBuilder = require('../builder/GitIgnoreBuilder');

describe('GitIgnore', () => {

  const expectedListeDansLeGitIgnore = [".git", ".idea", ".gitignore"];
  const gitIgnoreFileForTest = new GitIgnoreBuilder();
  gitIgnoreFileForTest.assigneLaListeAEcrire(expectedListeDansLeGitIgnore);
  gitIgnoreFileForTest.build();
  const path = __dirname + '/../builder';

  describe('contient', () => {
    it('doit retourner les informations contenu dans le gitignore', () => {
      // given
      const expectedList = expectedListeDansLeGitIgnore;
      const gitIgnore = new GitIgnore(path);
      //when
      const result = gitIgnore.contient();
      // then
      expect(result).toEqual(expectedList);
    })
  })
})
