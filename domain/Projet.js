const fs = require('fs-extra');
const Restrictions = require('./Restrictions');
const GitIgnore = require('./GitIgnore');
const genereUnObjetSelonLeTypeDElement = require('../adaptateur/genereUnObjetSelonLeTypeDElement');

class Projet {

  constructor(path, restrictionList) {
    this.path = __dirname + path;
    this.restrictions = construitLesRestrictions(restrictionList);
    this.elements = [];
  }

  initialiseLesElements() {
    this.setElements(fs.readdirSync(this.path).map(item => {
      const data = {
        nom: item,
        path: this.path
      };
      return genereUnObjetSelonLeTypeDElement(data);
    }));
  }

  getElements() {
    return this.elements;
  }

  setElements(elements) {
    this.elements = elements;
  }

  ajouteLesRestrictionsDesGitIgnore(elements) {
    elements.map(item => {
      if (item instanceof GitIgnore) {
        this.restrictions.ajoute(item.contient());
      }
    });
  }

  filtreSelonLesRestrictions(elements) {
    this.setElements(elements.filter(item => {
      if (!this.restrictions.totale.includes(item.nom))
        return item;
    }));
  }

  explore() {
    this.initialiseLesElements();
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