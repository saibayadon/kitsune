# 🦊
No frills, super basic, vanilla React boilerplate. 
For a more robust setup check out something like https://astro.build/ or https://vitejs.dev/

### Defaults
- **Babel 7** (`preset-env` set to ">2%, last 1 edge version, last 2 safari version, not ie 11, not op_mini all").
- **PostCSS** (CSS Modules + CSSNano)
- **React** (^18.2.0)
- **React Router**

### Babel Plugins
- **@babel/plugin-proposal-class-properties**
- **@babel/plugin-proposal-object-rest-spread**

### How to run locally
- `yarn install`
- `yarn start`

### Build for production
- `yarn build` -> Will output a build folder

### Linting
**ESLint & Prettier** (Using AirBnB defaults)
- `yarn lint` -> Will lint all code under `src` folder.
