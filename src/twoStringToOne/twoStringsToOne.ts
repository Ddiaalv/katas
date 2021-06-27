/**
 * Join two strings into one without repeating characters.
 * @param {string} sentence1 - First Phrase to join.
 * @param {string} sentence - Second Phrase to join.
 * @example
 * // returns 'aehrsty'
 * twoStringToOne('aretheyhere', 'yestheyarehere')
 * @returns string
 */
export const twoStringToOne = (
  sentence1: string,
  sentence2: string
): string => {
  let sentence = ''
  const sentence1AsArray = [...sentence1]
  const sentence2AsArray = [...sentence2]
  sentence1AsArray.forEach(
    (letter) => !sentence.includes(letter) && (sentence += letter)
  )
  sentence2AsArray.forEach(
    (letter) => !sentence.includes(letter) && (sentence += letter)
  )
  return sentence.split('').sort().join('')
}
