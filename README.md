### Svelte App IE11 Starter

Example IE11 Starter Project with SCSS (Preprocess)

Technologies used:

- [Rollup](https://rollupjs.org/)
- Babel
- Core-js
- SCSS via [Svelte Preprocess](https://github.com/kaisermann/svelte-preprocess#readme). (You can see what other preprocessing is supported)
- [Svelte SPA Router](https://github.com/ItalyPaleAle/svelte-spa-router)

Check the final [rollup config](https://github.com/jayliu50/svelte-example-museums/blob/master/rollup.config.js) of this.

Adapted from [Svelte Example Museums](https://github.com/angelozehr/svelte-example-museums). Updates from the original:

- Updated Rollup and dependencies to later major version.
- Added stronger support for core-js polyfills, resolving potential gotchas for devs new to all this.

### Dependency Decisions

- Using SCSS with PostCSS (autoprefixer) to author styles. Emotion did not work. Also, not sure if the eventual implementation by Svelte would work, since it seemed like the community was gravitating toward an implementation based on CSS Variables. TODO: see if using `postcss-preset-env` would help bring those modern CSS features.
