const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");

const createNode = function createNode(destinationPath) {
  return fs.mkdirSync(destinationPath);
};

const deleteNode = function compiledComponent_to_jsFile(destinationPath) {
  const isDirectory = fs.statSync(destinationPath).isDirectory();

  return isDirectory
    ? rimraf.sync(destinationPath)
    : fs.unlinkSync(destinationPath);
};

const doesNodeExist = function doesNodeExist(destinationPath) {
  return fs.statSync(destinationPath);
};

const moveAllFilesOfADirectory = function moveAllFilesOfADirectory(
  originPath,
  destinationPath
) {
  fs.readdirSync(originPath).forEach(file => {
    fs.copyFileSync(
      path.join(originPath, file),
      path.join(destinationPath, file)
    );
  });
};

const readFileContent = function readFileContent(destinationPath) {
  return fs.readFileSync(destinationPath, "utf8");
};

const writeFile = function writeFile(destinationPath, content) {
  return fs.writeFileSync(destinationPath, content);
};

module.exports = {
  createNode,
  deleteNode,
  doesNodeExist,
  moveAllFilesOfADirectory,
  readFileContent,
  writeFile
};
