const Projet = require('../domain/Projet');
class ExplorerUnProjet {
  constructor(path, fileReaderService, restrictionList) {
    this.directory = new Projet(path, fileReaderService, restrictionList);
  }

  execute() {
    return this.directory.getFilesConsideringGitIgnoreRestrictions();
  }
}

module.exports = ExplorerUnProjet;