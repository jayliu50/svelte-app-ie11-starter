import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import svg from "rollup-plugin-svg-import";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";

import autoPreprocess from "svelte-preprocess";
// import nodePolyfills from "rollup-plugin-node-polyfills"; // DO NOT USE

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js",
  },
  plugins: [
    svg({ stringify: true }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: (css) => {
        css.write("public/bundle.css");
      },
      preprocess: autoPreprocess({
        scss: {
          includePaths: ["src", "node_modules"],
        },
        postcss: {
          plugins: [require("autoprefixer")],
        },
      }),
    }),
    // nodePolyfills(), // DO NOT USE

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    resolve(),
    commonjs(),
    // added by angelo
    json(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // added by angelo
    // compile to good old IE11 compatible ES5
    babel({
      babelHelpers: "runtime",
      extensions: [".js", ".mjs", ".html", ".svelte"],
      exclude: [
        "node_modules/@babel/**",
        "node_modules/core-js/**",
        /\/core-js\//, // prevent circular depedencies https://github.com/rollup/rollup-plugin-babel/issues/254
      ],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              ie: "11",
            },
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: true,
          },
        ],
      ],
    }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
