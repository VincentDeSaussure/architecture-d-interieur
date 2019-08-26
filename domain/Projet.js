const Restrictions = require('./Restrictions');
const Element = require('./Element');

const restrictions = new Restrictions();

class Projet {

  constructor(path, fileReaderService, restrictionList) {
    this.path = __dirname + path;
    this.fileReaderService = fileReaderService;
    this.restrictions = restrictions.ajoute(restrictionList);
  }

  getElements() {
    return this.fileReaderService.readdirSync(this.path).map(item => {
      return new Element(item);
    })
  }

  explore() {
    const elements = this.getElements();
    elements.map(item => {
      if (item.type == "gitignore") {
        return false;
      }
    })
    return
  }
}

module.exports = Projet;