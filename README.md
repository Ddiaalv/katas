# Encontrar la palabra con menos caracteres

## Enunciado:

Un `pangrama es una frase que contiene cada letra del alfabeto al menos una vez`. Por ejemplo la frase inglesa 'Extraño pan de col y kiwi se quemó bajo fugaz vaho.' es un pangrama por que se encuentran las letras de la A-Z al menos una vez (las mayúsculas son irrelevantes).

Crea una función que `detecte si ésta es un pangrama`, pasaremos por parámetro una frase (string) y `devolverá true o false` dependiendo del resultado. `Ignoraremos los numeros y los símbolos`.

En este caso solo utilizaremos el alfabeto español.

## Ejemplos:

```jsx
isPangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho.') // => return true

isPangram('Esto no es un pangrama.') // => return false
```
