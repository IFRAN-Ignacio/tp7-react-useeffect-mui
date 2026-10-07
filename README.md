# TPN°7 React - Hook - user state - useEffect

## Enunciado

Tener en cuenta:
https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=9&codigo=9&inicio=0

Crear un componente que permita ingresar texto y mostrar el número de caracteres ingresados en tiempo real.

- Utilizar el hook useState para mantener el estado del texto ingresado.
- Utilizar el hook useEffect para actualizar el número de caracteres cada vez que cambia el estado del texto.
- Mostrar el número de caracteres en la página.
- Añadir un límite de caracteres para el texto ingresado (por ejemplo, 100 caracteres).
- Mostrar una advertencia cuando se alcance el límite de caracteres.
- Crear un componente que permita ingresar texto y mostrar el número de palabras ingresadas en tiempo real.
- Mostrar el número de palabras en la página.
- Implementar el framework https://primereact.org/ o https://v2.grommet.io/ o https://mui.com/
- Subir link de GitHub (incluir este enunciado) en un archivo plano

## Solución

- **Framework elegido: [MUI (Material UI)](https://mui.com/)**, con los componentes `Container`, `Stack`,
  `Paper`, `Typography`, `TextField` y `Alert`. Se instala con `@mui/material`, `@emotion/react`
  y `@emotion/styled`; la tipografía Roboto viene de `@fontsource/roboto` (sin pedirla a internet).
- **`src/ContadorCaracteres.js`**
  - `useState` para el texto (`texto`) y para la cantidad de caracteres (`cantidad`).
  - `useEffect(() => setCantidad(texto.length), [texto])` actualiza la cantidad cada vez que cambia el texto.
  - Límite de **100 caracteres** (`LIMITE`): el texto se corta con `slice(0, LIMITE)`, también si se pega
    texto más largo.
  - Al llegar al límite el contador se pone en color de advertencia y aparece un `Alert` con el aviso.
- **`src/ContadorPalabras.js`**
  - `useState` para el texto y para la cantidad de palabras.
  - `useEffect` que, cada vez que cambia el texto, cuenta las palabras (separadas por uno o más espacios,
    tabulaciones o saltos de línea; el texto vacío o con solo espacios da 0).
- **`src/App.js`** muestra los dos componentes en la página.

## Cómo ejecutarlo

```bash
npm install
npm start
```

Se abre en http://localhost:3000
