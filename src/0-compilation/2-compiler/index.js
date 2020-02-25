const { read } = require("../utils/fileSystemManipulation/file");

const parsedComponent_to_compiledComponent = function parsedComponent_to_compiledComponent(
  parsedComponent
) {
  const html = parsedComponent[0].content;

  const templateContent = read("./src/1-runtime/index.js");

  return templateContent.replace(
    '"insertCodeHere"',
    `document.body.innerHTML = "${html}"`
  );
};

module.exports = {
  parsedComponent_to_compiledComponent
};
