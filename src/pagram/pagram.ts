export const isPagram = (sentence: string): boolean => {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'
  const arrayAlphabet = [...alphabet]
  return arrayAlphabet.every((letter) =>
    sentence.toLowerCase().includes(letter)
  )
}
