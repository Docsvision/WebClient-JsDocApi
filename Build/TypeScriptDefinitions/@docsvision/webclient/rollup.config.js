const { uglify } = require("rollup-plugin-uglify");
const typescript = require('rollup-plugin-typescript2');
const log = require('fancy-log');
const colors = require('ansi-colors');

const plugins = [
  typescript()
];
if (process.env.buildTarget === "PROD") {
  plugins.push(uglify());
} else {
  log(colors.red("Building not opimized scripts for development"));
}

module.exports = {
  output: {
    format: 'amd'
  },
  plugins: plugins,
  external: function(moduleName) {
    return moduleName.startsWith("@docsvision/webclient") || 
      ["moment", "react", "react-dom", "styled-components", "classnames", "tslib", "noty", "qs", "shallowequal", "vis" ].includes(moduleName);
  }
};