const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')
const marked = require('marked')
const yaml = require('yaml-front-matter')

const schema = {
  type: 'object',
  properties: {
    markedOptions: { type: 'object' }
  }
}

module.exports = function loader(source) {
  const options = getOptions(this) || {}
  validateOptions(schema, options, 'Markdown Loader')
  const md = yaml.loadFront(source)
  md.__content = marked(md.__content, options.markedOptions || null)
  return `module.exports = ${JSON.stringify(md)}`
}
