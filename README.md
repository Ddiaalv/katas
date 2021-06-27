# Encontrar la palabra con menos caracteres

## Enunciado:

Escribe una función que `reciba un string de palabras` (no puede estar vacío) y `devuelva la longitud de la palabra más pequeña` de ésta. ener en cuenta que es posible que hayan símbolos... por lo que no se deberían contar como parte de la palabra. Controlaremos únicamente los siguientes: `,.;:-\_\*{}[]¿?¡!"&/`.

## Ejemplos:

```jsx
findShort('bitcoin take over the world maybe who knows perhaps') // => returns 3

findShort(
  ':: : ; bitcoin, ta;ke over... the wor***ld: maybe; *who* kno¡ws// perh{}{aps'
) // => returns 3
```
