module.exports = {
    presets: [
        "@babel/preset-react",
        ["@babel/preset-env", {
            targets: { browsers: ["last 2 Chrome versions", "last 2 Firefox versions", "last 2 Safari versions"] },
            useBuiltIns: 'usage',
            forceAllTransforms: process.env.NODE_ENV === 'production'
        }]
    ]
}
