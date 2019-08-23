const detecteType = require("../../domain/detecteType");
const typeDElement = require("../../model/typeDElement");

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
    expect(result).toBe(typeDElement.DIRECTORY);
  });

  it("file", () => {
    // given
    const file = 'file.txt';
    // when
    const result = detecteType(file);
    // then
    expect(result).toBe(typeDElement.FILE);
  });
})