import { translate } from './progress.js'

test('translates d to half a dev day', () => {
  expect(translate('d')).toEqual({ 'Dev': 0.5 })
})

test('translates D to one dev day', () => {
  expect(translate('D')).toEqual({ 'Dev': 1.0 })
})

test('translates dD to one and a half dev days', () => {
  expect(translate('dD')).toEqual({ 'Dev': 1.5 })
})

test('translates q to half a qa day', () => {
  expect(translate('q')).toEqual({ 'QA': 0.5 })
})

test('handle more than one make like dddQ', () => {
  expect(translate('dddQ')).toEqual({ 'QA': 1.0, 'Dev': 1.5 })
})
