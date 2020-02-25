const directory = require("../utils/fileSystemManipulation/directory");
const file = require("../utils/fileSystemManipulation/file");
const node = require("../utils/fileSystemManipulation/node");

const makeInSortToHaveAnEmptyDestionationDirectory = function parsedComponent_to_compiledComponent() {
  const destinationPath = "../dist";

  if (node.doesExist(destinationPath)) {
    directory.remove(destinationPath);
  }

  directory.create(destinationPath);
};

const compiledComponent_to_jsFile = function compiledComponent_to_jsFile(
  compiledComponent
) {
  makeInSortToHaveAnEmptyDestionationDirectory();

  directory.copyAllFiles("./src/1-runtime/dist", "./dist");

  file.create("./dist/index.js", compiledComponent);
};

module.exports = {
  compiledComponent_to_jsFile
};
