import { Calculator } from './calc.js'

describe('Calculator, с точностью в два знака после точки', () => {

  let calc = null

  beforeEach(() => {
    //1'Given'
    const options = {
      precision: 2
    }
    calc = new Calculator(options)
  })

  describe('format', () => {

    test('должен форматировать результат чисел после точки, если precision 2 то 2 знака после точки', () => {

      //2'When'
      const result = calc.format(3.123)
      //3'Then'
      expect(result).toEqual(3.12)
    })

    test('должен форматировать результат чисел после точки, если precision 2 то 2 знака после точки передаю 4.334 получаю 4.33', () => {

      //2'When'
      const result = calc.format(4.334)
      //3'Then'
      expect(result).toEqual(4.33)
    })

    test('должен форматировать результат чисел после точки, если precision 11 то 11 знака после точки', () => {
      //1'Given'
      const options = {
        precision: 11
      }
      const calc = new Calculator(options)
      //2'When'
      const result = calc.format(3.122463706811)
      //3'Then'
      expect(result).toEqual(3.12246370681)
    })
  })




  describe('division', () => {

    test('division two positive numbers', () => {

      const input = {
        a: 6.4,
        b: 2.23
      }
      const result = calc.division(input.a, input.b)

      expect(result).toEqual(2.87)
    })

    test('division two negative numbers', () => {

      const input = {
        a: -6.4,
        b: -2.23
      }
      const result = calc.division(input.a, input.b)

      expect(result).toEqual(2.87)
    })

    test('division one positive and one negative numbers', () => {

      const input = {
        a: 6.4,
        b: -2.23
      }
      const result = calc.division(input.a, input.b)

      expect(result).toEqual(-2.87)
    })

  })

  describe('multiplication', () => {

    test('multiplication two positive numbers', () => {

      const input = {
        a: 3.3,
        b: 1.343
      }

      const result = calc.multiplication(input.a, input.b)

      expect(result).toEqual(4.43)
    })

    test('multiplication two negative numbers', () => {

      const input = {
        a: -3.3,
        b: -1.343
      }

      const result = calc.multiplication(input.a, input.b)

      expect(result).toEqual(4.43)
    })

    test('multiplication one positive and one negative numbers', () => {

      const input = {
        a: 3.3,
        b: -1.343
      }

      const result = calc.multiplication(input.a, input.b)

      expect(result).toEqual(-4.43)
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

