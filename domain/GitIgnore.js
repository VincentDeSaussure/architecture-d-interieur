class GitIgnore {

  constructor(fileReaderSystem, path) {
    this.contenu = extracterContenu(formateLePath(path), fileReaderSystem);
  }

  contient() {
    return this.contenu;
  }
}

function extracterContenu(path, fileReaderSystem) {
  return fileReaderSystem.readFileSync(path, 'utf-8')
    .split('\/\n');
}

function formateLePath(path) {
  return path + '/.gitignore';
}

module.exports = GitIgnore;