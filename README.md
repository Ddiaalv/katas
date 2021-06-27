# Palabra oculta

## Enunciado:

Crear una función que tome un número por parámetro entre 100-999999 y devuelva un string con la palabra escondida. Las palabras solo pueden contener las siguientes letras: `"a", "b", "d", "e", "i", "l", "m", "n", "o", "t"`

La clave para descifrar la palabra oculta es la siguiente:
`"a" - 6 "b" - 1 "d" - 7 "e" - 4 "i" - 3 "l" - 2 "m" - 9 "n" - 8 "o" - 0 "t" - 5`.

## Ejemplos:

```jsx
hiddenWord(637) // => returns 'aid'

hiddenWord(7415) // => returns 'debt'
```
