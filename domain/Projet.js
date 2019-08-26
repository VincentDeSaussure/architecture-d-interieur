const Restrictions = require('./Restrictions');
const GitIgnore = require('./GitIgnore');
const Element = require('./Element');

class Projet {

  constructor(path, fileReaderService, restrictionList) {
    this.path = __dirname + path;
    this.fileReaderService = fileReaderService;
    this.restrictions = construitLesRestrictions(restrictionList);
  }

  getElements() {
    return this.fileReaderService.readdirSync(this.path).map(item => {
      return new Element(item);
    })
  }

  explore() {
    let elements = this.getElements();
    elements.map(item => {
      if (item.type == "gitignore") {
        const gitignore = new GitIgnore(this.fileReaderService, this.path);
        this.restrictions.ajoute(gitignore.contient());
      }
    });
    // goo at this point
    elements = elements.filter(item => {
      if (!this.restrictions.totale.includes(item.name))
        return item;
    });
    return elements;
  }
}

function construitLesRestrictions(restrictionList) {
  const restrictions = new Restrictions();
  restrictions.ajoute(restrictionList);
  return restrictions;
}



module.exports = Projet;