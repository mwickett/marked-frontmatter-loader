import compiler from './test_config'

test('Firing', async () => {
  const stats = await compiler('fixture.md')
  console.log(stats)
})
