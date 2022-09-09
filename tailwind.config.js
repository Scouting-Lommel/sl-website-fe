module.exports = {
  content: [
    "./src/pages/*.js",
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
