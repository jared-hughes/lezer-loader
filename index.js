const { buildParserFile } = require("@lezer/generator");

exports.default = function loader(source) {
  const built = buildParserFile(source, {
    exportName: "__parser",
  });
  return built.parser + "\nexport default __parser\n" + built.terms;
};
