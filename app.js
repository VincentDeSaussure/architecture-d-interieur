const fs = require('fs-extra');
const restrictionList = require('./model/restrictionList');
const Directory = require('./domain/Directory');

const path = './';
const directory = new Directory(path, fs, restrictionList);

console.log(directory.start());