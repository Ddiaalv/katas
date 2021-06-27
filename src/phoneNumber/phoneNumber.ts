import { phoneNumberValidation } from './utils/phoneValidations'

/**
 * Create a phone number from an array of numbers.
 * @param {number[]} numbers - Array of numbers to convert into phone number.
 * @example
 * // returns '(123) 456-7890'
 * phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 * @returns string
 */
export const phoneNumber = (numbers: number[]): string => {
  let phoneNumberTemplate = '(xxx) xxx-xxxx'
  if (phoneNumberValidation(numbers)) {
    numbers.forEach((number) => {
      phoneNumberTemplate = phoneNumberTemplate.replace('x', number.toString())
    })
  }
  return phoneNumberTemplate
}
