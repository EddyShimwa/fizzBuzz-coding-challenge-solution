const fizzBuzz = require('./fizzbuzz')
const assert = require('assert')

describe('Tests', function () {
  it('Should return a function', function () {
    assert(typeof fizzBuzz === 'function')
  })
  it('Function should return an array', function () {
    assert(Array.isArray(fizzBuzz()) == true)
  })
  it('Numbers divisible by only 3 should return "Fizz"', function () {
    assert.strictEqual(fizzBuzz()[2], 'Fizz')
  })
  it('Numbers divisible by only 5 should return "Buzz"', function () {
    assert.strictEqual(fizzBuzz()[99], 'Buzz')
  })
  it('Numbers divisible by both 3 and 5 should return "FizzBuzz"', function () {
    assert.strictEqual(fizzBuzz()[89], 'FizzBuzz')
  })
  it('Numbers not divisible by either 3 or 5 should return the number itself', function () {
    assert.strictEqual(fizzBuzz()[12], 13)
  })
})
