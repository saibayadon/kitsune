/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      features: { 'logical-properties-and-values': false },
    }),
    require('postcss-import')(),
    require('postcss-logical')(),
    require('cssnano'),
  ],
};
