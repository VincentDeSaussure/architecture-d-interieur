const Projet = require("../domain/Projet");
const fs = require("fs-extra");

class ExplorerUnProjet {

  constructor(path) {
    this.path = path;
  }

  execute() {
    let projet = new Projet(this.path);
    projet.explore();
    return projet.getElements();
  }
}