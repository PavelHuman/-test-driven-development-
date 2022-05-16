
// export const translate = () => ({ 'Dev': 0.5 })

// export const translate = (c) => (c === 'd' ? { 'Dev': 0.5 } : { 'Dev': 1.0 })

// export const translate = (input) => {
//   let sum = 0;
//   input.split('').forEach((c) => sum += c === 'd' ? 0.5 : 1.0)
//   return { 'Dev': sum }
// }

// const parse = (c) => {
//   switch (c) {
//     case 'd': return { status: 'Dev', effort: 0.5 }
//     case 'D': return { status: 'Dev', effort: 1 }
//     case 'q': return { state: 'QA', effort: 0.5 }
//   }
// }

// export const translate = (input) => {
//   const state = {
//     'Dev': 0,
//     'QA': 0
//   }

//   input.split('').forEach((c) => {
//     const { status, effort } = parse(c)
//     state[status] = state[status] + effort
//   })
//   return state
// }

const dict = {
  'd': {
    status: 'Dev',
    effort: 0.5
  },
  'D': {
    status: 'Dev',
    effort: 1.0
  },
  'q': {
    status: 'QA',
    effort: 0.5
  },
  'Q': {
    status: 'QA',
    effort: 1.0
  }
}
const parse = (c) => dict[c]

export const translate = (input) => {
  const items = input.split('')
  return items.reduce((accumulator, current) => {
    const { status, effort } = parse(current)
    accumulator[status] = (accumulator[status] || 0) + effort
    return accumulator
  }, {})
}

