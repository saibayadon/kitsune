/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-preset-env')(),
    require('postcss-import')(),
    require('cssnano'),
  ],
};
