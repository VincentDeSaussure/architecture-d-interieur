const fichierFromPathAdaptateur = require("../adaptateur/fichier-from-path-adaptateur");

class Fichier {
  constructor({cheminAbsolu, cheminRelatif, nom, dependances} = {}) {
    this.cheminAbsolu = cheminAbsolu;
    this.cheminRelatif = cheminRelatif;
    this.nom = nom;
    this.dependances = dependances;
  }

  static createFromPath(cheminAbsolu, dirname) {
    return new Fichier({
      cheminAbsolu: cheminAbsolu,
      cheminRelatif: fichierFromPathAdaptateur.createCheminRelatifFromCheminAbsolu(cheminAbsolu, dirname),
      nom: fichierFromPathAdaptateur.extraitNomFromCheminAbsolu(cheminAbsolu),
      dependances : []
    })
  }
}

module.exports = Fichier;