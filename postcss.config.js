const cssnano = require("cssnano");
require("cssnano");
module.exports = {
  plugins: [
    // require("postcss-import"),

    require("tailwindcss"),
    cssnano({ preset: "default" }),
    require("autoprefixer"),
  ],
};
