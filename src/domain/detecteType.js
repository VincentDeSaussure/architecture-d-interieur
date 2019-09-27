const typeDElement = require('../model/typeDElement');

function detecteType(element) {
  if(detecteGitIgnore(element)) {
    return typeDElement.GITIGNORE;
  } else if( detecteDirectory(element)) {
    return typeDElement.DOSSIER;
  } else {
    return typeDElement.FICHIER;
  }
}

function detecteGitIgnore(element) {
  return element === ".gitignore";
}

function detecteDirectory(element) {
  return element.lastIndexOf('.') === -1;
}

module.exports = detecteType;