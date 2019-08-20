const fs = require('fs-extra');
const restrictionList = require('./model/restrictionList');
const ExplorerUnProjet = require('./usecase/ExplorerUnProjet');

const path = '/../.';
const explorerUnProjet = new ExplorerUnProjet(path, fs, restrictionList);

console.log(explorerUnProjet.execute());