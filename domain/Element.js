const typeDElement = require("../model/typeDElement");
const detecteType = require("./detecteType");

class Element {
  constructor(name) {
    this.name = name;
    this.type = detecteType(name);
    this.parent = this.type === typeDElement.DIRECTORY ? true : false;
  }
}

module.exports = Element;