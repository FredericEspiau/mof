const fs = require('fs');
const rimraf = require('rimraf');

const createNode = function (path) {
	return fs.mkdirSync(path);
};

const deleteNode = function (path) {
	const isDirectory = fs.statSync(path).isDirectory();

	return isDirectory ? rimraf.sync(path) : fs.unlinkSync(path);
};

const doesNodeExist = function (path) {
	return fs.statSync(path);
};

const readFileContent = function (path) {
	return fs.readFileSync(path, 'utf8');
};

module.exports = {
	createNode,
	deleteNode,
	doesNodeExist,
	readFileContent
};
