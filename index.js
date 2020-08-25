const path = require("path");

module.exports = (options, context) => ({
  define: {
    TYPE: options.type || "maven",
    REPO: options.repo || "com.baomidou/mybatis-plus"
  },
  clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
});
