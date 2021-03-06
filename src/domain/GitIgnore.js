const fs = require('fs-extra');
const Element = require("./Element");

class GitIgnore extends Element{

  constructor(data) {
    super(data);
    this.contenu = extracterContenu(super.getPath());
  }

  contient() {
    return this.contenu;
  }
}

function extracterContenu(path) {
  return fs.readFileSync(path, 'utf-8')
    .split('\/\n');
}

module.exports = GitIgnore;