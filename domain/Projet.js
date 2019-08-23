const Restrictions = require('./Restrictions');
const Element = require('./Element');
const detecteType = require('./detecteType');

const restrictions = new Restrictions();

class Projet {

  constructor(path, fileReaderService, restrictionList) {
    this.path = __dirname + path;
    this.fileReaderService = fileReaderService;
    this.restrictions = restrictions.ajoute(restrictionList);
  }

  getFiles() {
    return this.fileReaderService.readdirSync(this.path);
  }

  explore() {
    return this.getFiles().map(item => {
      return new Element(item);
    });
  }
}

module.exports = Projet;