import {add, subtract} from '../math'

test('add returns the sum of numbers', () => {
  const result = add(1, 2)
  expect(result).toBe(3)
})

test('subtract returns the difference of numbers', () => {
  const result = subtract(3, 2)
  expect(result).toBe(1)
})
