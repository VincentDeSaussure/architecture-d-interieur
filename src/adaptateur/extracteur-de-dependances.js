const fs = require("fs-extra");

module.exports = function extraitLesDependancesDuFichier(cheminAbsolu) {
  const contenu = fs.readFileSync(cheminAbsolu, 'utf-8');
  const repereLesDependances = inspecteurDeDependances(contenu);
  return repereLesDependances;
}

function inspecteurDeDependances(contenu) {
  return contenu.match(/const .* = require\(.*\)/g);
}