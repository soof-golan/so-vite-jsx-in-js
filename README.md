# Adding support to JSX Syntax in .js file with Vite

This repository is an example of how to add support to JSX in .js file in Vite.

It is part of the answer to [this question on StackOverflow][1]

# TL;DR

Add the following to your `vite.config.js`:

```js
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: "tsx",
    include: [
      // Business as usual for .jsx and .tsx files
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",

      // Add the specific files you want to allow JSX syntax in
      "src/LocalJsxInJsComponent.js",
      "node_modules/bad-jsx-in-js-component/index.js",
      "node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js",
      "node_modules/bad-jsx-in-js-component/ts/index.ts",
      "node_modules/bad-jsx-in-js-component/ts/BadJSXinTS.ts",

      // --- OR ---

      // Add these lines to allow all .js files to contain JSX
      "src/**/*.js",
      "node_modules/**/*.js",

      // Add these lines to allow all .ts files to contain JSX
      "src/**/*.ts",
      "node_modules/**/*.ts",
    ],
  }
})
```

[1]: https://stackoverflow.com/questions/74620427/
