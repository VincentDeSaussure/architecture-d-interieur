const restrictionList = require('./src/model/restrictionList');
const ExplorerUnProjet = require('./src/usecase/ExplorerUnProjet');

const path = __dirname + '/../.';
const explorerUnProjet = new ExplorerUnProjet(path, restrictionList);

console.log(explorerUnProjet.execute());