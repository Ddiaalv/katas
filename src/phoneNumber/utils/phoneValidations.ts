/**
 * Check the validations necessary to create a phone number.
 * @param {number[]} numbers - Array of numbers to check.
 * @example
 * // returns true
 * phoneNumberValidation([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 * @returns boolean
 */
export const phoneNumberValidation = (numbers: number[]): boolean => {
  return arrayLimit(numbers) && numberIsBetweenCeroAndNine(numbers)
}

/**
 * Check if the size of the array is correct.
 * @param {number[]} numbers - Array of numbers to check.
 * @example
 * // returns true
 * arrayLimit([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 * @returns boolean
 */
export const arrayLimit = (numbers: number[]): boolean => {
  const arrayLengthLimit = 10
  return numbers.length === arrayLengthLimit
}

/**
 * Checks if a number is between 0 and 9 (included 0 and 9).
 * @param {number[]} numbers - Array of numbers to check.
 * @example
 * // returns true
 * numberIsBetweenCeroAndNine([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 * @returns boolean
 */
export const numberIsBetweenCeroAndNine = (numbers: number[]): boolean => {
  const lowerLimit = 0
  const upperLimit = 9
  let validation = true
  numbers.forEach((number) => {
    if (number < lowerLimit || number > upperLimit) validation = false
  })
  return validation
}
