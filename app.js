const restrictionList = require('./model/restrictionList');
const ExplorerUnProjet = require('./usecase/ExplorerUnProjet');

const path = __dirname + '/../.';
const explorerUnProjet = new ExplorerUnProjet(path, restrictionList);

console.log(explorerUnProjet.execute());