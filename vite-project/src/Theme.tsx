import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#82b1ff', // Color principal para botones y bordes
      contrastText: '#ffffff', // Color del texto dentro de botones
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#1e1e1e',
      paper: '#2c2c2c',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#bdbdbd',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            backgroundColor: '#2c2c2c', // Fondo del input
            color: '#ffffff', // Texto dentro del input
            borderRadius: '8px',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#424242', // Color del borde del input
            },
            '&:hover fieldset': {
              borderColor: '#ffffff', // Color del borde al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffffff', // Color del borde cuando está enfocado
            },
          },
          '& .MuiInputLabel-root': {
            color: '#bdbdbd', // Color del label
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#ffffff', // Color del label cuando está enfocado
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Evita que el texto esté en mayúsculas
          borderRadius: '8px', // Bordes redondeados
          fontWeight: 600, // Negrita para el texto
        },
        contained: {
          backgroundColor: '#424242', // Color del botón contenido
          color: '#1e1e1e', // Color del texto dentro del botón contenido
          '&:hover': {
            backgroundColor: '#ffffff', // Color de fondo al pasar el mouse
          },
        },
        outlined: {
          borderColor: '#82b1ff', // Borde del botón outline
          color: '#82b1ff',
          '&:hover': {
            backgroundColor: 'rgba(130, 177, 255, 0.1)', // Fondo ligero al pasar el mouse
          },
        },
        text: {
          color: '#82b1ff', // Texto del botón de tipo texto
          '&:hover': {
            backgroundColor: 'rgba(130, 177, 255, 0.1)',
          },
        },
      },
    },
  },
});

export default darkTheme;
