import thumbWar from '../thumb-war'
import {getWinner} from '../utils'

jest.mock('../utils')

afterEach(() => {
  getWinner.mockClear()
})

test('returns winner', async () => {
  const winner = await thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])
})
