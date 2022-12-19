const { locales, defaultLocale } = require("./src/locales");

module.exports = {
  locales: locales,
  defaultLocale: defaultLocale,
  pages: {
    "*": ["common"],
  },
};
