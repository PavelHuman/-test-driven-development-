const add = require('./calc.js')

describe('calculator', function () {
  test('add two numbers', function () {
    expect(add(1, 2)).toEqual(3)
  })
})
