const detecteType = require("./detecteType");

class Element {
  constructor(name) {
    this.name = name;
    this.type = detecteType(name);
  }
}

module.exports = Element;