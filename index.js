const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')
const marked = require('marked')
const yaml = require('yaml-front-matter')

const schema = {
  type: 'object',
  properties: {
    markedFunction: { type: 'function' },
    markedOptions: { type: 'object' }
  }
}

module.exports = function loader(source) {
  const options = getOptions(this)

  validateOptions(schema, options, 'Markdown Loader')

  const md = yaml.loadFront(source)
  if (options.markedFunction) {
    md.__content = options.markedFunction.call(null, md.__content)
  } else {
    md.__content = marked(md.__content)
  }

  return `module.exports = ${JSON.stringify(md)}`
}
