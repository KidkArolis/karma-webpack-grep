var webpack = require('webpack')

module.exports = function (options) {
  if (!options.grep) {
    return []
  }

  var grep = options.grep
  var base = options.basePath
  var testContext = options.testContext

  var pattern = grep
    .replace(new RegExp('^' + base), '')
    .replace(/\.js$/, '')

  return [new webpack.ContextReplacementPlugin(new RegExp(testContext), function (result) {
    if (result.request === testContext) {
      var originalPattern = result.regExp.toString().replace(/^\/|\/$/g, '')
      pattern = '.*' + pattern.replace(originalPattern, '.*' + originalPattern)
      result.regExp = new RegExp(pattern)
    }
  })]
}
