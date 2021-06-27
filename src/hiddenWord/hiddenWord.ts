/**
 * Convert a number between 100-999999 into word (Maya exerc).
 * @param {number} num - Number to convert into word.
 * @example
 * // returns 'aid'
 * hiddenWord(637)
 * @returns string
 */
export const hiddenWord = (num: number): string => {
  const keys: { [key: string]: string } = {
    '6': 'a',
    '1': 'b',
    '7': 'd',
    '4': 'e',
    '3': 'i',
    '2': 'l',
    '9': 'm',
    '8': 'n',
    '0': 'o',
    '5': 't',
  }
  return [...num.toString()].map((number) => keys[number]).join('')
}
