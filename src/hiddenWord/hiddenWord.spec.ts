import { hiddenWord } from './hiddenWord'

describe('Hidden word:', () => {
  test('Should returns a word constructed according to the number typed', () => {
    expect(hiddenWord(637)).toBe('aid')
    expect(hiddenWord(7415)).toBe('debt')
    expect(hiddenWord(49632)).toBe('email')
    expect(hiddenWord(942547)).toBe('melted')
  })
})
