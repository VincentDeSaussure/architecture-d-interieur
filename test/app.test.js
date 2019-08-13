const fs = require('fs-extra');
const restrictionList = require('../model/restrictionList');
const Directory = require('../domain/Directory');

describe('app', () => {
  it('should return the list of file contain in the target directory', () => {
    // given
    const path = '/../test/directory-for-test'
    const directory = new Directory(path, fs, restrictionList);

    // when
    const result = directory.start();

    // then
    expect(result).toEqual(["directory-with-gitignore", "file1.js"]);
  })
})