const typeDElement = require('../model/typeDElement');
const Fichier = require("../domain/Fichier");
const Dossier = require("../domain/Dossier");
const GitIgnore = require("../domain/GitIgnore");
const detecteType = require("../domain/detecteType");

function genereUnObjetSelonLeTypeDElement(data) {
  const type = detecteType(data.nom);
  switch (type) {
    case typeDElement.DOSSIER:
      return new Dossier(data);
      break;
    case typeDElement.FICHIER:
      return new Fichier(data);
      break;
    case typeDElement.GITIGNORE:
      return new GitIgnore(data);
      break;
    default:
      return false;
  }
}

module.exports = genereUnObjetSelonLeTypeDElement;