const { read } = require("../utils/fileSystemManipulation/file");

const mofFile_to_componentCode = function mofFile_to_componentCode(
  pathToRootComponentFile
) {
  return read(pathToRootComponentFile);
};

module.exports = {
  mofFile_to_componentCode
};
