import { deleteSymbols } from './deleteSymbols'

const sentence = 'bitcoin take over the world maybe who knows perhaps'
const sentenceWithSymbols =
  ':: : ; bitcoin, ta;ke over... the wor***ld: maybe; *who* kno¡ws// perh{}{aps'

describe('Delete symbols:', () => {
  test('Should remove all symbols from a phrase', () => {
    expect(deleteSymbols(sentenceWithSymbols)).toBe(sentence)
  })
})
