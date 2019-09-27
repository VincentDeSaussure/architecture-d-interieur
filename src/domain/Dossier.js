const Element = require("./Element");
const fs = require("fs-extra");
const genereUnObjetSelonLeTypeDElement = require('../adaptateur/genereUnObjetSelonLeTypeDElement');

class Dossier extends Element {

  constructor(data) {
    super(data);
    this.elements = [];
  }

  getElements() {
    return this.elements;
  }

  setElements(elements) {
    this.elements = elements;
  }

  initialiseLesElements() {
    this.setElements(fs.readdirSync(this.path).map(item => {
      const data = {
        nom: item,
        path: super.getPath()
      };
      return genereUnObjetSelonLeTypeDElement(data);
    }));
  }
}

module.exports = Dossier;