const fs = require('fs-extra');

class GitIgnoreBuilder {
  constructor() {
    this.listeAEcrire = "";
    this.path = "./test/builder/.gitignore"
  }

  build() {
    fs.stat(this.path, (err) => {
      if(err) {
        fs.writeFile(this.path, this.listeAEcrire, function(err) {
          if (err) throw err;
          else return true
        })
      } else {
        return true;
      }
    })
  }

  assigneLaListeAEcrire(listeDeFichierAEcrire) {
    if(typeof listeDeFichierAEcrire == "string") {
      this.listeAEcrire = listeDeFichierAEcrire;
    } else if(typeof listeDeFichierAEcrire == "object") {
      this.listeAEcrire = listeDeFichierAEcrire
        .join('--pattern-for-replace--')
        .replace(/--pattern-for-replace--/g, '\n');
    }
  }

  assigneLeChemin(path) {
    this.path = path + '.gitignore';
  }
}

module.exports = GitIgnoreBuilder;