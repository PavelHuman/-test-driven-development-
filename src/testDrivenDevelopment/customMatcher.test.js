import jsonpath from 'jsonpath'

expect.extend({
  toMatchJsonPath(received, argument) {
    const result = jsonpath.query(received, argument)
    if (result.length > 0) {
      return {
        pass: true,
        message: () => 'matched'
      }
    } else {
      return {
        pass: false,
        message: () => `expected ${JSON.stringify(received)} to match
 jsonpath ${argument}`
      }
    }
  }
})

describe('jsonpath', () => {
  it('matches jsonpath', () => {
    const user = {
      name: 'Juntao'
    }
    expect(user).toMatchJsonPath('$.name')
  })
  it('does not match jsonpath', () => {
    const user = {
      name: 'Juntao',
      address: 'ThoughtWorks'
    }
    expect(user).not.toMatchJsonPath('$.age')
  })
})
