const fs = require("fs-extra");

const fichierFromPathAdaptateur = {
  createCheminRelatifFromCheminAbsolu(cheminAbsolu, dirname) {
    return cheminAbsolu.replace(dirname, ".");
  },
  extraitNomFromCheminAbsolu(cheminAbsolu) {
    return cheminAbsolu.substring(cheminAbsolu.lastIndexOf('/') + 1, cheminAbsolu.length);
  },
  extraitLesDependancesDuFichier(cheminAbsolu) {
    const contenu = fs.readFileSync(cheminAbsolu, 'utf-8');
    return [];
  }
}

module.exports = fichierFromPathAdaptateur;