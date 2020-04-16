const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["src"] = path.resolve(__dirname) + "/src";
    return config;
  },
};
