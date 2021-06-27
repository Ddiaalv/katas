import { phoneNumber } from './phoneNumber'

const phoneNumbers = [
  {
    array: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    expect: '(111) 111-1111',
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    expect: '(123) 456-7890',
  },
]
describe('Create a phone number:', () => {
  test('Should return a string with the phone number:', () => {
    phoneNumbers.forEach((value) => {
      expect(phoneNumber(value.array)).toBe(value.expect)
    })
  })
})
