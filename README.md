# 🦊

- Babel 7, with preset-env set to last 2 versions of Chrome, FF and Safari.
- PostCSS (w/ CSS Modules)
- React Router

### How to run locally
* `yarn install`
* `yarn start`

### Build for production
* `yarn build` -> Will output a dist folder

### Extra optimizations:
* You can add a `Loadable` (https://github.com/thejameskyle/react-loadable) and use Dynamic Imports for code splitting (https://github.com/airbnb/babel-plugin-dynamic-import-webpack)
* You can add an alias to `preact` by using `preact-compat` (https://github.com/developit/preact-compat)
