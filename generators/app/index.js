const path = require("path");
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  initializing() {
    this.log("working!");
  }
};
