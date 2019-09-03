const Restrictions = require('./Restrictions');
const GitIgnore = require('./GitIgnore');
const Element = require('./Element');
const fs = require('fs-extra');

class Projet {

  constructor(path, restrictionList) {
    this.path = __dirname + path;
    this.restrictions = construitLesRestrictions(restrictionList);
    this.elements = this.initialiseLesElements();
  }

  initialiseLesElements() {
    return fs.readdirSync(this.path).map(item => {
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
        const gitignore = new GitIgnore(this.path);
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

  detecteUnElementDeTypeDirectory(elements) {
    elements.map(item => {
      if (item.type == typeDElement.DIRECTORY) {
        const directory = new Projet()
      }
    })
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