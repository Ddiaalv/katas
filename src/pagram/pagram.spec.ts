import { isPagram } from './pagram'

const pagram = 'Extraño pan de col y kiwi se quemó bajo fugaz vaho.'
const sentence = 'Esto no es un pangrama.'

describe('Is a pangram:', () => {
  test('should return true if is a pagram:', () => {
    expect(isPagram(pagram)).toBeTruthy()
    expect(isPagram(pagram.toUpperCase())).toBeTruthy()
  })
  test('should return false if is not a pagram:', () => {
    expect(isPagram(sentence)).toBeFalsy()
  })
})
