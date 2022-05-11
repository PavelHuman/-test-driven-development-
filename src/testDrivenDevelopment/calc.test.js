import { Calculator } from './calc.js'

describe('Calculator', () => {
  let calc = null
  beforeEach(() => {
    const options = {
      precision: 2
    }
    calc = new Calculator(options)
  })

  describe('division', () => {

    let calc = null
    beforeEach(() => {
      const options = {
        precision: 11
      }
      calc = new Calculator(options)
    })

    test('division two positive numbers', () => {

      const input = {
        a: 6.4,
        b: 2.23
      }
      const result = calc.division(input.a, input.b)

      expect(result).toEqual(2.86995515695)
    })

    test('division two negative numbers', () => {

      const input = {
        a: -6.4,
        b: -2.23
      }
      const result = calc.division(input.a, input.b)

      expect(result).toEqual(2.86995515695)
    })

    test('division one positive and one negative numbers', () => {

      const input = {
        a: 6.4,
        b: -2.23
      }
      const result = calc.division(input.a, input.b)

      expect(result).toEqual(-2.86995515695)
    })

  })

  describe('multiplication', () => {

    let calc = null
    beforeEach(() => {
      const options = {
        precision: 3
      }
      calc = new Calculator(options)
    })

    test('multiplication two positive numbers', () => {

      const input = {
        a: 3.3,
        b: 1.343
      }

      const result = calc.multiplication(input.a, input.b)

      expect(result).toEqual(4.432)
    })

    test('multiplication two negative numbers', () => {

      const input = {
        a: -3.3,
        b: -1.343
      }

      const result = calc.multiplication(input.a, input.b)

      expect(result).toEqual(4.432)
    })

    test('multiplication one positive and one negative numbers', () => {

      const input = {
        a: 3.3,
        b: -1.343
      }

      const result = calc.multiplication(input.a, input.b)

      expect(result).toEqual(-4.432)
    })

  })

  describe('subtraction', () => {

    test('subtraction two positive numbers', () => {

      const input = {
        a: 5.2,
        b: 1.333
      }

      const result = calc.subtract(input.a, input.b)

      expect(result).toEqual(3.87)
    })

    test('subtraction two negative numbers', () => {

      const input = {
        a: -5.2,
        b: -1.333
      }

      const result = calc.subtract(input.a, input.b)

      expect(result).toEqual(-3.87)
    })

    test('subtraction one positive and one negative numbers', () => {

      const input = {
        a: 5.2,
        b: -1.333
      }

      const result = calc.subtract(input.a, input.b)

      expect(result).toEqual(6.53)
    })
  })

  describe('addition', () => {

    test('adds two positive numbers', () => {

      const input = {
        a: 1.333,
        b: 3.2,
      }

      const result = calc.add(input.a, input.b)

      expect(result).toEqual(4.53)
    })

    test('adds two negative numbers', () => {

      const input = {
        a: -1.333,
        b: -3.2,
      }

      const result = calc.add(input.a, input.b)

      expect(result).toEqual(-4.53)
    })

    test('adds one positive and one negative numbers', () => {

      const input = {
        a: 1.333,
        b: -3.2,
      }

      const result = calc.add(input.a, input.b)

      expect(result).toEqual(-1.87)

    })
  })
})



// it('create a callable function', () => {
//   const mock = jest.fn()
//   mock('Juntao')
//   expect(mock).toHaveBeenCalled()
//   expect(mock).toHaveBeenCalledWith('Juntao')
//   expect(mock).toHaveBeenCalledTimes(1)
// })

// it('mock implementation', () => {
//   const fakeAdd = jest.fn().mockImplementation((a, b) => 5)
//   expect(fakeAdd(1, 1)).toBe(5)
//   expect(fakeAdd).toHaveBeenCalledWith(1, 1)
// })

