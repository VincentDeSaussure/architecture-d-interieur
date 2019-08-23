class Restrictions {
  constructor() {
    this.totale = [];
  }

  ajoute(listeDeRestrictions) {
    this.totale = this.totale.concat(supprimeLesDoublons(this.totale, listeDeRestrictions));
  }

  result() {
    return this.totale;
  }
}

function supprimeLesDoublons(totale, listeDeRestrictions) {
  return listeDeRestrictions.filter(item => !totale.includes(item));
}

module.exports = Restrictions;