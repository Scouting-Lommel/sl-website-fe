const { locales, defaultLocale } = require("./src/locales");

// TODO: Clean up workaround when an official fix is available
const workaround = require("next-translate/lib/cjs/plugin/utils.js");
workaround.defaultLoader =
  "(l, n) => import(`lang/${l}/${n}.json`).then(m => m.default)";

module.exports = {
  locales: locales,
  defaultLocale: defaultLocale,
  pages: {
    "*": ["common"],
  },
};
