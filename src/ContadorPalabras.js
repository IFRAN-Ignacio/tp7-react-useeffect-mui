import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// Componente que permite ingresar texto y muestra la cantidad de palabras en tiempo real.
function ContadorPalabras() {
  // Hook de estado: texto ingresado
  const [texto, setTexto] = useState('');
  // Hook de estado: cantidad de palabras
  const [palabras, setPalabras] = useState(0);

  // Hook de efecto: se ejecuta cada vez que cambia el estado 'texto'
  // y actualiza el número de palabras (separadas por uno o más espacios, tabs o saltos de línea).
  useEffect(() => {
    const limpio = texto.trim();
    setPalabras(limpio === '' ? 0 : limpio.split(/\s+/).length);
  }, [texto]);

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Contador de palabras
      </Typography>
      <TextField
        label="Ingrese un texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        fullWidth
        multiline
        minRows={2}
      />
      <Typography sx={{ mt: 2 }}>Palabras: {palabras}</Typography>
    </Paper>
  );
}

export default ContadorPalabras;
