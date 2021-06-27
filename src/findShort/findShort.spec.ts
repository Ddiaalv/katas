import { findShort } from './findShort'

const sentenceOne = 'bitcoin take over the world maybe who knows perhaps'
const sentenceTwo = 'El bitcoin quizás se apodere del mundo, quién sabe'
describe('Find short:', () => {
  test('Should return 3 as the number of characters in the smallest word.', () => {
    expect(findShort(sentenceOne)).toBe(3)
  })
  test('Should return 2 as the number of characters in the smallest word.', () => {
    expect(findShort(sentenceTwo)).toBe(2)
  })
})
