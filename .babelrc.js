module.exports = {
    presets: [
        "@babel/preset-react",
        ["@babel/preset-env", {
            targets: { browsers: [">0.25%", "not ie 11", "not op_mini all"] },
            useBuiltIns: 'usage',
            forceAllTransforms: process.env.NODE_ENV === 'production'
        }]
    ]
}
