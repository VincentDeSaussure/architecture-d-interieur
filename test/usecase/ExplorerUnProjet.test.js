const fs = require('fs-extra');
const restrictionList = require('../../model/restrictionList');
const ExplorerUnProjet = require('../../usecase/ExplorerUnProjet');

describe('ExplorerUnProjet', () => {
  it('should return the expected list of file', () => {
    // given
    const path = '/../test/directory-for-test';
    const expectedFiles = ["directory-with-gitignore", "file1.js"];
    const explorerunProjet = new ExplorerUnProjet(path, fs, restrictionList);

    // when
    const result = explorerunProjet.execute();

    // then
    expect(result).toEqual(expectedFiles);
  });
})