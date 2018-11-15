const markedInstance = require('marked')
const renderer = new markedInstance.Renderer()

renderer.heading = (title, level) => {
  return String(`<h${level} data-test="foobar">${title}</h${level}>`)
}

module.exports = renderer
