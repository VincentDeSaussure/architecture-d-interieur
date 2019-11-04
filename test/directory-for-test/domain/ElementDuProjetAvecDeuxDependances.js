const Projet = require("./Projet");
const Projet2 = require("./Projet2");

class ElementDuProjet {
  constructor() {
    this.projet = new Projet();
  }

  runProjet() {
    this.projet.run();
  }
}

module.exports =  ElementDuProjet;