const compiler = require('./test_config')
const renderer = require('./fixture/markedFixture')

describe('test various configs', () => {
  test('Base config - no options', async () => {
    const expected =
      'module.exports = {"content":"<h1 id=\\"this-is-some-test-markdown\\">This is some test markdown</h1>\\n<p>This is <em>markdown</em></p>\\n","data":{"name":"cool","age":43},"isEmpty":false,"excerpt":""}'
    const stats = await compiler('./fixture/fixture.md')
    const output = stats.toJson().modules[0].source
    expect(output).toBe(expected)
  })

  test('Custom marked renderer', async () => {
    const expected =
      'module.exports = {"content":"<h1 data-test=\\"foobar\\">This is some test markdown</h1><p>This is <em>markdown</em></p>\\n","data":{"name":"cool","age":43},"isEmpty":false,"excerpt":""}'
    const stats = await compiler('./fixture/fixture.md', {
      markedOptions: { renderer }
    })
    const output = stats.toJson().modules[0].source
    expect(output).toBe(expected)
  })
})
