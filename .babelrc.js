module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '>2%, last 1 edge version, last 2 safari version, not ie 11, not op_mini all',
          ],
        },
        useBuiltIns: "usage",
        corejs: '^3.0.0',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
