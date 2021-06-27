/**
 * Returns a phrase without symbols.
 * @param {string} phrase - Phrase to remove symbols.
 * @example
 * // returns 'bitcoin take over the world maybe who knows perhaps'
 * findShort('bitcoin, take over... the world: maybe; *who* knows perhaps')
 * @returns string
 */
export const deleteSymbols = (phrase: string): string => {
  const symbols = ',.;:-_*{}[]¿?¡!"&/'
  let tempPhrase = phrase
  for (let index = 0; index < symbols.length; index++) {
    const symbol = symbols[index]
    for (let index = 0; index < tempPhrase.length; index++) {
      tempPhrase = tempPhrase.replace(symbol, '')
    }
  }
  return tempPhrase.trim()
}
