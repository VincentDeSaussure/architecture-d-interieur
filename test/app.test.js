const fs = require('fs-extra');
const restrictionList = require('../model/restrictionList');
const ExplorerUnProjet = require('../usecase/ExplorerUnProjet');

describe('app', () => {
  it('should return the list of file contain in the target directory', () => {
    // given
    const path = '/../test/directory-for-test';
    const expectedFiles = ["directory-with-gitignore", "file1.js"];
    const explorerUnProjet = new ExplorerUnProjet(path, fs, restrictionList);

    // when
    const result = explorerUnProjet.execute();

    // then
    expect(result).toEqual(expectedFiles);
  })
})