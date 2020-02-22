const compiler = require('./html');

const parsedComponent_to_compiledComponent = function (parsedComponent) {
	const html = parsedComponent[0].content;

	return compiler(html);
};

module.exports = {
	parsedComponent_to_compiledComponent
};
