import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContadorCaracteres from './ContadorCaracteres';
import ContadorPalabras from './ContadorPalabras';

function App() {
  return (
    <Container maxWidth="sm" sx={{ my: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        TPN°7 React - Hook - useEffect
      </Typography>
      <Stack spacing={3}>
        <ContadorCaracteres />
        <ContadorPalabras />
      </Stack>
    </Container>
  );
}

export default App;
