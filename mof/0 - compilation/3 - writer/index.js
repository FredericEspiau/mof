const fileSystemManipulation = require('./utils/fileSystemManipulation');

const makeInSortToHaveAnEmptyDestionationDirectory = function () {
	const destinationPath = '../dist';

	if (fileSystemManipulation.doesNodeExist(destinationPath)) {
		fileSystemManipulation.deleteNode(destinationPath);
	}

	fileSystemManipulation.createNode(destinationPath);
};

const compiledComponent_to_jsFile = function () {
	makeInSortToHaveAnEmptyDestionationDirectory();
};

module.exports = {
	compiledComponent_to_jsFile
};
