const reader = require('./0 - reader');
const parser = require('./1 - parser');
const compiler = require('./2 - compiler');
const writer = require('./3 - writer');

debugger;

const componentCode = reader.mofFile_to_componentCode('./src/Hello.mof');
const parsedComponent = parser.componentCode_to_parsedComponent(componentCode);
const compiledComponent = compiler.parsedComponent_to_compiledComponent(parsedComponent);
const result = writer.compiledComponent_to_jsFile(compiledComponent);

