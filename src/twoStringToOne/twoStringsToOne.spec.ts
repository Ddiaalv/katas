import { twoStringToOne } from './twoStringsToOne'

const sentence1 = 'aretheyhere'
const sentence2 = 'yestheyarehere'
const result = 'aehrsty'

describe('Two strings to one:', () => {
  test('Should return a string wihout repeat letters from two diferent string:', () => {
    expect(twoStringToOne(sentence1, sentence2)).toBe(result)
  })
})
