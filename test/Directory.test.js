const fs = require('fs-extra');
const restrictionList = require('../model/restrictionList');
const Directory = require('../domain/Directory');

describe('test fs library', () => {
  it('should return the file in a dirname', () => {
    // given
    const expectedFiles = ["directory-with-gitignore", "file1.js"];
    const path = '/../test/directory-for-test';
    const directory1 = new Directory(path, fs, restrictionList);

    // when
    const result = directory1.getFiles();

    // then
    expect(result).toEqual(expectedFiles);
  });

  describe('hasGitIgnore', () => {
    it('should return true when .gitignore exist', () => {
      // given
      const path = '/../test/directory-for-test/directory-with-gitignore';
      const directoryWithGitIgnore = new Directory(path, fs, restrictionList);

      // when
      const result = directoryWithGitIgnore.hasGitIgnore();

      // then
      expect(result).toEqual(true);
    });

    it('should return false when .gitignore is absent', () => {
      // given
      const path = '/../test/directory-for-test';
      const directoryWithoutGitIgnore = new Directory(path, fs, restrictionList);

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
        const directoryWithGitIgnore = new Directory(path, fs, restrictionList);

        // when
        const result = directoryWithGitIgnore.getRestrictions();

        // then
        expect(result).toEqual(expectedRestrictions);
      });
    });

    it('should return the list of files filtered by restrictions', () => {
      // given
      const expectedFiles = ["file1.js", "node_modules_stub"];
      const path = '/../test/directory-for-test/directory-with-gitignore';
      const directoryWithGitIgnore = new Directory(path, fs, restrictionList);

      // when
      const result = directoryWithGitIgnore.getFilesConsideringGitIgnoreRestrictions();

      // then
      expect(result).toEqual(expectedFiles);
    })
  });
});