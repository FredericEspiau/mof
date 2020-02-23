const {
  createNode,
  deleteNode,
  doesNodeExist,
  moveAllFilesOfADirectory,
  writeFile
} = require("../utils/file-system-manipulation");

const makeInSortToHaveAnEmptyDestionationDirectory = function parsedComponent_to_compiledComponent() {
  const destinationPath = "../dist";

  if (doesNodeExist(destinationPath)) {
    deleteNode(destinationPath);
  }

  createNode(destinationPath);
};

const compiledComponent_to_jsFile = function compiledComponent_to_jsFile(
  compiledComponent
) {
  makeInSortToHaveAnEmptyDestionationDirectory();

  moveAllFilesOfADirectory("./src/1-runtime/dist", "./dist");

  writeFile("./dist/index.js", compiledComponent);
};

module.exports = {
  compiledComponent_to_jsFile
};
