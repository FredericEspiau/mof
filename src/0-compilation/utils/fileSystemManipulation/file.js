const fs = require("fs");

const create = function create(whereToCreate, content = "") {
  fs.writeSync(whereToCreate, content);
};

const read = function read(destinationPath) {
  return fs.readFileSync(destinationPath, "utf8");
};

const remove = function remove(pathToDelete) {
  fs.unlinkSync(pathToDelete);
};

module.exports = {
  create,
  read,
  remove
};
