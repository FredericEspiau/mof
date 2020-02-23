const { mofFile_to_componentCode } = require("./0-reader");
const { componentCode_to_parsedComponent } = require("./1-parser");
const { parsedComponent_to_compiledComponent } = require("./2-compiler");
const { compiledComponent_to_jsFile } = require("./3-writer");

const componentCode = mofFile_to_componentCode("./tests/Hello.mof");
const parsedComponent = componentCode_to_parsedComponent(componentCode);
const compiledComponent = parsedComponent_to_compiledComponent(parsedComponent);

compiledComponent_to_jsFile(compiledComponent);
