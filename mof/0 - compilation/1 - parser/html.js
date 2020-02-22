const unified = require('unified');
const html = require('rehype-parse');

const parse = function (content) {
	const root = unified()
		.use(html)
		.parse(content);

	return root.children[0].children[1];
};

module.exports = {
	parse
};
