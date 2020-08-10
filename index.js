const path = require("path");

module.exports = (options, context) => ({
  define: {
    TYPE: options.type || ".theme-default-content :not(a) > img",
    REPO: options.repo
  },
  clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
});