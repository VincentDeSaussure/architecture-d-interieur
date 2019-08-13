class Directory {

  constructor(path, fileReaderService, restrictionList) {
    this.path = __dirname + path;
    this.fileReaderService = fileReaderService;
    this.restrictionList = restrictionList
  }

  getFiles() {
    return this.fileReaderService.readdirSync(this.path);
  }

  hasGitIgnore() {
    return this.getFiles().find(file => file == ".gitignore") !== undefined ? true : false;
  }

  getRestrictions() {
    if(this.hasGitIgnore()) {
      return this.fileReaderService.readFileSync(this.path + '/.gitignore', 'utf-8').split('\/\n').concat(this.restrictionList);
    }
    return [];
  }

  getFilesConsideringGitIgnoreRestrictions() {
    const restrictions = this.getRestrictions();
    return this.getFiles().filter(file => restrictions.includes(file) == false);
  }

  start() {
    return this.getFilesConsideringGitIgnoreRestrictions();
  }
}

module.exports = Directory;