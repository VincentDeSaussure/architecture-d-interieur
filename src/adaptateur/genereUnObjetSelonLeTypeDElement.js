const typeDElement = require('../model/typeDElement');
const Fichier = require("../domain/Fichier");
const Dossier = require("../domain/Dossier.js");
const GitIgnore = require("../domain/GitIgnore");
const detecteType = require("../domain/detecteType");

function genereUnObjetSelonLeTypeDElement(data) {
  console.log(data);
  const type = detecteType(data.nom);
  if (type ==  typeDElement.DOSSIER) {
    return new Dossier(data);
  }
  if (type == typeDElement.FICHIER) {
    return new Fichier(data);
  }
  if (type == typeDElement.GITIGNORE) {
      return new GitIgnore(data);
  }
  return false;
}
module.exports = genereUnObjetSelonLeTypeDElement;