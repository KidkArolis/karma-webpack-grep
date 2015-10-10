# karma-webpack-grep

Enables you to run `karma start --grep some/partial/path` to limit which files `karma-webpack` bundles. This can give a huge performance boost when booting up karma in development.

## Installation

    $ npm install --save-dev karma-webpack-grep

## Usage

When using `karma-webpack`, you must provide webpack config to karma. Use this module to extend the plugins of your webpack config:

```js
// somewhere in your karma.conf.js

module.exports = function (config) {
  webpackConfig.plugins = (webpackConfig.plugins || []).concat(
    grep({
      grep: config.grep,
      // same baseDir as used in karma conf
      baseDir: 'client',
      // same string as used in `require.ensure`
      // in your main test file
      // see https://github.com/webpack/karma-webpack#alternative-usage
      testContext: '..'
    })
  )
}
```

## Docs

Read a more in depth explanation of this approach at https://medium.com/@kidkarolis/karma-webpack-grep-super-fast-tests-in-dev-b11130e2c2c6.
