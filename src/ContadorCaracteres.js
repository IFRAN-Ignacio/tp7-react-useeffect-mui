import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

// Cantidad máxima de caracteres permitidos
const LIMITE = 100;

// Componente que permite ingresar texto y muestra la cantidad de caracteres en tiempo real.
function ContadorCaracteres() {
  // Hook de estado: texto ingresado
  const [texto, setTexto] = useState('');
  // Hook de estado: cantidad de caracteres
  const [cantidad, setCantidad] = useState(0);

  // Hook de efecto: se ejecuta cada vez que cambia el estado 'texto'
  // y actualiza el número de caracteres.
  useEffect(() => {
    setCantidad(texto.length);
  }, [texto]);

  function cambiar(e) {
    // slice garantiza que nunca se supere el límite (también al pegar texto)
    setTexto(e.target.value.slice(0, LIMITE));
  }

  const limiteAlcanzado = cantidad >= LIMITE;

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Contador de caracteres
      </Typography>
      <TextField
        label="Ingrese un texto"
        value={texto}
        onChange={cambiar}
        fullWidth
        multiline
        minRows={2}
        slotProps={{ htmlInput: { maxLength: LIMITE } }}
        helperText={`Límite: ${LIMITE} caracteres`}
      />
      <Typography
        sx={{
          mt: 2,
          color: limiteAlcanzado ? 'warning.main' : 'text.primary',
          fontWeight: limiteAlcanzado ? 700 : 400,
        }}
      >
        Caracteres: {cantidad} / {LIMITE}
      </Typography>
      {limiteAlcanzado && (
        <Alert severity="warning" sx={{ mt: 2 }}>
          Se alcanzó el límite de {LIMITE} caracteres.
        </Alert>
      )}
    </Paper>
  );
}

export default ContadorCaracteres;
