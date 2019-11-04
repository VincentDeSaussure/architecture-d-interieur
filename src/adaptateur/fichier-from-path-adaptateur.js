const fichierFromPathAdaptateur = {
  createCheminRelatifFromCheminAbsolu(cheminAbsolu, dirname) {
    return cheminAbsolu.replace(dirname, ".");
  },
  extraitNomFromCheminAbsolu(cheminAbsolu) {
    return cheminAbsolu.substring(cheminAbsolu.lastIndexOf('/') + 1, cheminAbsolu.length);
  }
}

module.exports = fichierFromPathAdaptateur;