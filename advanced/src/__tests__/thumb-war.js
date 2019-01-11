import thumbWar from '../thumb-war'

test('returns winner', async () => {
  const winner = await thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(['Kent C. Dodds', 'Ken Wheeler']).toContain(winner)
})
