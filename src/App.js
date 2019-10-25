const fs = require('fs');

class App {

  constructor(path) {
    this.path = path
  }

  run() {
    const contenu = [];
    let files = recupereLesFichiers(this.path, contenu);
    files = retireLeDirectoryPathDesElements(files, this.path);
    return files;
  }
}

function recupereLesFichiers(path, contenu) {
  contenu = contenu || [];
  const files = fs.readdirSync(path);
  files.map(file => {
    const name = path + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      recupereLesFichiers(name, contenu);
    } else {
      contenu.push(name);
    }
  });
  return contenu;
}

function retireLeDirectoryPathDesElements(files, path) {
  return files.map(file => {
    return file.replace(path, '');
  })
}

function recupereLesDependancesDUnElement(element) {
  return

}

function creerElementDepuisUnNomDeFichier(fileName) {

}

module.exports = App;