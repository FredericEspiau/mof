const {parse} = require('recast');

export const buildElement = function ({tagName}) {
	return parse('buildElement(' + tagName + ')');
};