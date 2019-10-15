const Projet = require("./Projet");

class ElementDuProjet {
  constructor() {
    this.projet = new Projet();
  }

  runProjet() {
    this.projet.run();
  }
}

module.exports =  ElementDuProjet;