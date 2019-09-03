class Element {
  constructor(data) {
    this.id = data.counter;
    this.nom = data.nom;
    this.path = data.path;
  }

  getId() {
    return this.id;
  }
  getNom() {
    return this.nom;
  }
  getPath() {
    return this.path;
  }


}

module.exports = Element;