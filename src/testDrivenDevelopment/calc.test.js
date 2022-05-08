import { add } from './calc.js'
import { Calculator } from './calc.js'


// describe('calculator', () => {
//   it('should perform addition', () => { })
//   it('should perform subtraction', () => { })
//   it('should perform multiplication', () => { })
//   it('should perform division', () => { })
// })

// describe('calculator', () => {
//   describe('should perform addition', () => {
//     it('adds two positive numbers', () => { })
//     it('adds two negative numbers', () => { })
//     it('adds one positive and one negative numbers', () => { })
//   })
// })

describe('Calculator', () => {
  let calc = null
  beforeEach(() => {
    const options = {
      precision: 2
    }
    calc = new Calculator(options)
  })
  describe('addition', () => {

    test('adds two positive numbers', () => {
      // Given
      const input = {
        a: 1.333,
        b: 3.2,
      }

      // When
      const result = calc.add(input.a, input.b)

      // Than
      expect(result).toEqual(4.53)
    })

    test('adds two negative numbers', () => {
      // Given
      const input = {
        a: -1.333,
        b: -3.2,
      }

      // When
      const result = calc.add(input.a, input.b)

      // Than
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

// import jsonpath from 'jsonpath'

// const user = {
//   name: 'Juntao Qiu',
//   address: 'Xian, Shaanxi, China',
//   projects: [
//     { name: 'ThoughtWorks University' },
//     { name: 'ThoughtWorks Core Business Beach' }
//   ]
// }
// const result = jsonpath.query(user, '$.projects')
// console.log(JSON.stringify(result))

// expect.extend({
//   toMatchJsonPath(received, argument) {
//     const result = jsonpath.query(received, argument)
//     if (result.length > 0) {
//       return {
//         pass: true,
//         message: () => 'matched'
//       }
//     } else {
//       return {
//         pass: false,
//         message: () => `expected ${JSON.stringify(received)} to match
//  jsonpath ${argument}`
//       }
//     }
//   }
// })

// describe('jsonpath', () => {
//   it('matches jsonpath', () => {
//     const user = {
//       name: 'Juntao'
//     }
//     expect(user).toMatchJsonPath('$.name')
//   })
//   it('does not match jsonpath', () => {
//     const user = {
//       name: 'Juntao',
//       address: 'ThoughtWorks'
//     }
//     expect(user).not.toMatchJsonPath('$.age')
//   })
// })

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

