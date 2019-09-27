const detecteType = require("../../src/domain/detecteType");
const typeDElement = require("../../src/model/typeDElement");

describe("detecteType", () => {
  it("gitignore", () => {
    // given
    const gitignore = '.gitignore';
    // when
    const result = detecteType(gitignore);
    // then
    expect(result).toBe(typeDElement.GITIGNORE);
  });

  it("directory", () => {
    // given
    const directory = 'directory';
    // when
    const result = detecteType(directory);
    // then
    expect(result).toBe(typeDElement.DOSSIER);
  });

  it("file", () => {
    // given
    const file = 'file.txt';
    // when
    const result = detecteType(file);
    // then
    expect(result).toBe(typeDElement.FICHIER);
  });
})