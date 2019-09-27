class Element {
  constructor(data) {
    this.nom = data.nom;
    this.path = data.path + '/' + data.nom;
  }

  getNom() {
    return this.nom;
  }
  getPath() {
    return this.path;
  }


}

module.exports = Element;