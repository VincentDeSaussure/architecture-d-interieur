const Restrictions = require('./Restrictions');
const GitIgnore = require('./GitIgnore');
const Element = require('./Element');

class Projet {

  constructor(path, fileReaderService, restrictionList) {
    this.path = __dirname + path;
    this.fileReaderService = fileReaderService;
    this.restrictions = construitLesRestrictions(restrictionList);
    this.elements = this.initialiseLesElements();
  }

  initialiseLesElements() {
    return this.fileReaderService.readdirSync(this.path).map(item => {
      return new Element(item);
    })
  }

  getElements() {
    return this.elements;
  }

  setElements(elements) {
    this.elements = elements;
  }

  ajouteLesRestrictionsDesGitIgnore(elements) {
    elements.map(item => {
      if (item.type == "gitignore") {
        const gitignore = new GitIgnore(this.fileReaderService, this.path);
        this.restrictions.ajoute(gitignore.contient());
      }
    });
  }

  filtreSelonLesRestrictions(elements) {
    this.setElements(elements.filter(item => {
      if (!this.restrictions.totale.includes(item.name))
        return item;
    }));
  }

  explore() {
    this.ajouteLesRestrictionsDesGitIgnore(this.elements);
    this.filtreSelonLesRestrictions(this.elements);
    return this.getElements();
  }
}

function construitLesRestrictions(restrictionList) {
  const restrictions = new Restrictions();
  restrictions.ajoute(restrictionList);
  return restrictions;
}



module.exports = Projet;