const App = require('../src/App')

describe("app", () => {
  describe("when directory is compose of subdirectory", () => {
    it("should return list with subdirectory and child file associated", () => {
      // given
      const expectedListOfFile = [
        "/.gitignore",
        "/domain/Class.js",
        "/domain/Object.js",
        "/index.js",
        "/usecase/enregistrer.js",
        "/usecase/recuperer.js"
      ];
      const path = __dirname + "/directory-for-test";
      const app = new App(path);
      // when
      const result = app.run();
      // then
      expect(result).toEqual(expectedListOfFile);
    })
  });
});