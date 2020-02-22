const parse = require('./html');

const componentCode_to_parsedComponent = function (rawComponentCode) {
	return [
		{
			type: 'semantic',
			content: parse(rawComponentCode)
		}
	];
};

module.exports = {
	componentCode_to_parsedComponent
};
