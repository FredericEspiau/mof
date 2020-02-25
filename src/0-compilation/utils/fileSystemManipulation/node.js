const fs = require("fs");

const doesExist = function doesExist(pathToTest) {
  return fs.statSync(pathToTest);
};

const isDirectory = function isDirectory(pathToTest) {
  return fs.statSync(pathToTest).isDirectory();
};

module.exports = {
  doesExist,
  isDirectory
};
