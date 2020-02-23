const componentCode_to_parsedComponent = function componentCode_to_parsedComponent(
  rawComponentCode
) {
  return [
    {
      type: "semantic",
      content: rawComponentCode.split("\n")[1]
    }
  ];
};

module.exports = {
  componentCode_to_parsedComponent
};
