import { deleteSymbols } from './utils/deleteSymbols'

/**
 * Returns the number of characters of the smallest word.
 * @param {string} phrase - Phrase to analyze.
 * @example
 * // returns 3
 * findShort('bitcoin take over the world maybe who knows perhaps')
 * @returns number
 */
export const findShort = (phrase: string): number => {
  let splittedPhrase: string[] = []
  let lowerWordLength = 0
  const phraseIsNotEmpty = phrase.length > 0
  if (phraseIsNotEmpty) {
    const phraseWithoutSymbols = deleteSymbols(phrase)
    splittedPhrase = phraseWithoutSymbols.split(' ')
    splittedPhrase.forEach((word) => {
      if (lowerWordLength === 0) lowerWordLength = word.length
      if (word.length < lowerWordLength) lowerWordLength = word.length
    })
  }
  return lowerWordLength
}
