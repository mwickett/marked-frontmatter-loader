# marked-frontmatter-loader

Webpack loader that loads Markdown files, parses frontmatter using [gray matter](https://github.com/jonschlinkert/gray-matter) and uses [marked](https://github.com/markedjs/marked) to render Markdown.

This loader passes the `markedOptions` object on to `marked` allowing you to customize markdown rendering. See [marked docs](https://marked.js.org/#/README.md#README.md) for details on options.

It also passes `grayMatterOptions` to `gray-matter`. See [gray matter options](https://github.com/jonschlinkert/gray-matter#options) for details.
