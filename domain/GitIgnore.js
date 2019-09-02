const fs = require('fs-extra');

class GitIgnore {

  constructor(path) {
    this.contenu = extracterContenu(formateLePath(path));
  }

  contient() {
    return this.contenu;
  }
}

function extracterContenu(path) {
  return fs.readFileSync(path, 'utf-8')
    .split('\/\n');
}

function formateLePath(path) {
  return path + '/.gitignore';
}

module.exports = GitIgnore;