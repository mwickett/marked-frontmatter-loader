const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')
const marked = require('marked')
const matter = require('gray-matter')

const schema = {
  type: 'object',
  properties: {
    markedOptions: { type: 'object' },
    grayMatterOptions: { type: 'object' }
  }
}

module.exports = function loader(source) {
  const options = getOptions(this) || {}
  validateOptions(schema, options, 'Markdown Loader')
  const md = matter(source, options.grayMatterOptions || {})
  md.content = marked(md.content, options.markedOptions || {})
  return `module.exports = ${JSON.stringify(md)}`
}
