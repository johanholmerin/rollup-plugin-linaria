# rollup-plugin-linaria

Rollup plugin for linaria.

CSS files are extracted and added to rollup for
[other plugins](https://github.com/rollup/awesome#css) to handle.

## Install

```sh
 yarn add -D git+https://github.com/johanholmerin/rollup-plugin-linaria#semver:^1.0.0
```

## Usage

```javascript
// rollup.config.js
import babel from 'rollup-plugin-babel';
import linaria from 'rollup-plugin-linaria';
import css from 'rollup-plugin-css-only'

export default {
  ...,
  plugins: [
    ...,
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production'
    }),
    // Extract CSS
    css()
  ]
};
```

## Options

* `include`: a [micromatch](https://github.com/micromatch/micromatch) pattern, or array of patterns, specifying files to include
* `exclude`: a [micromatch](https://github.com/micromatch/micromatch) pattern, or array of patterns, specifying files to exclude
* `sourceMap`: if true, will inline source maps in generated CSS, defaults to false

All other options are passed to the [linaria babel plugin](https://github.com/callstack/linaria/blob/10118026dda9d578f542f3fc6f7d8b3d75e059b4/docs/BABEL_PRESET.md)
