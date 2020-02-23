const { readFileContent } = require("../utils/file-system-manipulation");

const mofFile_to_componentCode = function mofFile_to_componentCode(
  pathToRootComponentFile
) {
  return readFileContent(pathToRootComponentFile);
};

module.exports = {
  mofFile_to_componentCode
};
