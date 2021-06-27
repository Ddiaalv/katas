import { arrayLimit, numberIsBetweenCeroAndNine } from './phoneValidations'

describe('Validations phone number:', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const numbersWithErrors = [1, -2, 3, 4, 15, 6, 27, 8, 19, 0]
  describe('Number range is between 0 and 9', () => {
    test('Should return true if all numbers are between cero and nine:', () => {
      expect(numberIsBetweenCeroAndNine(numbers)).toBeTruthy()
    })
    test('Should return false if all numbers are not between cero and nine:', () => {
      expect(numberIsBetweenCeroAndNine(numbersWithErrors)).toBeFalsy()
    })
  })
  test('Should return true if the array length is 10:', () => {
    expect(arrayLimit(numbers)).toBeTruthy()
  })
})
