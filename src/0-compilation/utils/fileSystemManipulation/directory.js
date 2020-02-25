const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");

const copyAllFiles = function copyAllFiles(whereFilesAre, whereToCopyThem) {
  fs.readdirSync(whereFilesAre).forEach(file => {
    fs.copyFileSync(
      path.join(whereFilesAre, file),
      path.join(whereToCopyThem, file)
    );
  });
};

const create = function create(destinationPath) {
  fs.mkdirSync(destinationPath);
};

const remove = function remove(pathToDelete) {
  rimraf.sync(pathToDelete);
};

module.exports = {
  copyAllFiles,
  create,
  remove
};
