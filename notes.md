# getting-started

🔑 Getting started
- yarn add --dev jest
- create src/__tests__/math.js

☂️ Code Coverage
- Add scripts for test and test:coverage
- Open coverage/lcov-report/index.html


🔀 Babel/TypeScript Compilation Support
- yarn add --dev @babel/core @babel/preset-env
- configure babel
- update files to use modules
- yarn add --dev babel-core@bridge babel-jest
- Run coverage

- show advanced-ts-final config for TypeScript


# advanced

👀 Watch Mode
- change __tests__/math.js
- change math.js
- change utils.js and note that it's really smart
- run all tests
- make super-heros fail by adding jack-jack
- run only failing tests
- remove jack-jack
- exit failing tests
- run only thumb-war tests with typehead (note plugin)
- set pattern to "th"
- clear filter
- run all tests
- run test match for "m.*n"
- combine with pattern match for "math"
- clear filter
- run all tests
- hit enter to run again
- hit q to quit


🤹‍ Mocking
- open src/__tests__/thumb-war.js
- note how bad it is that our assertion is not good and we're basically making http calls every test
- add mock

```
jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => Promise.resolve(p1)),
  }
})

afterEach(() => {
  getWinner.mockClear()
})
```

- now the winner is deterministic:

```
  expect(winner).toBe('Kent C. Dodds')
  expect(getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])
```

- Now extract the mock to another file.


📸 Inline Snapshots
- open src/__tests__/super-heros.js
- Run tests in watch mode
- update jack-jack
- note error
- console.log and copy/paste
- note the git diff
- git reset
- add test
- npx jest --watch
- note added snapshot
- hit enter to run tests again
- git commit
- add jack-jack
- note error is similar to before
- hit "u" key to update the snapshot
- note git diff
- Do this again for inline snapshots
- yarn add --dev prettier

- note css-in-js custom serializer

🎉 last surprises
- note projects feature
- note pyjest
