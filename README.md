# 🦊
No frills, super basic, vanilla React boilerplate. 
For a more robust setup check out something like https://astro.build/ or https://vitejs.dev/

### Defaults
- **SWC** (compatibility set to ">2%, last 1 edge version, last 2 safari version, not ie 11, not op_mini all").
- **PostCSS** (CSS Modules + CSSNano)
- **React** (^18.2.0)
- **React Router**

### How to run locally
- `bun run install`
- `bun run start`

### Build for production
- `bun run build` -> Will output a build folder

### Linting
**ESLint & Prettier** (Using AirBnB defaults)
- `bun run lint` -> Will lint all code under `src` folder.
