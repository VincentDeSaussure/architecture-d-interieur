const fs = require('fs-extra');
const restrictionList = require('../../model/restrictionList');
const Projet = require('../../domain/Projet');

describe('test fs library', () => {
  it('should return the file in a dirname', () => {
    // given
    const expectedFiles = ["directory-with-gitignore", "file1.js"];
    const path = '/../test/directory-for-test';
    const projet1 = new Projet(path, fs, restrictionList);

    // when
    const result = projet1.getFiles();

    // then
    expect(result).toEqual(expectedFiles);
  });

  describe('hasGitIgnore', () => {
    it('should return true when .gitignore exist', () => {
      // given
      const path = '/../test/directory-for-test/directory-with-gitignore';
      const projetWithGitIgnore = new Projet(path, fs, restrictionList);

      // when
      const result = projetWithGitIgnore.hasGitIgnore();

      // then
      expect(result).toEqual(true);
    });

    it('should return false when .gitignore is absent', () => {
      // given
      const path = '/../test/directory-for-test';
      const directoryWithoutGitIgnore = new Projet(path, fs, restrictionList);

      // when
      const result = directoryWithoutGitIgnore.hasGitIgnore();

      // then
      expect(result).toEqual(false);
    });
  });

  describe('getFilesConsideringGitIgnoreRestriction', () => {

    describe('getRestrictions', () => {
      it('should add values from .gitignore to the initial restriction', () => {
        // given
        const expectedRestrictions = ['node_modules_stub/', '.git', '.gitignore'];
        const path = '/../test/directory-for-test/directory-with-gitignore';
        const projetWithGitIgnore = new Projet(path, fs, restrictionList);

        // when
        const result = projetWithGitIgnore.getRestrictions();

        // then
        expect(result).toEqual(expectedRestrictions);
      });
    });

    it('should return the list of files filtered by restrictions', () => {
      // given
      const expectedFiles = ["file1.js", "node_modules_stub"];
      const path = '/../test/directory-for-test/directory-with-gitignore';
      const projetWithGitIgnore = new Projet(path, fs, restrictionList);

      // when
      const result = projetWithGitIgnore.getFilesConsideringGitIgnoreRestrictions();

      // then
      expect(result).toEqual(expectedFiles);
    })
  });
});