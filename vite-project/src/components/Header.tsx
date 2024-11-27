import { Box, Typography } from '@mui/material';
import BannerImage from '../assets/banner-image.jpg'

function Header() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px', // Ajusta la altura según necesites
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo */}
      <img
        src={BannerImage}
        alt="Banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(50%)', // Oscurece solo la imagen
        }}
      />
      
      {/* Texto sobre la imagen usando Typography */}
      <Typography
        variant="h3" // Puedes ajustar el tipo de encabezado según tus necesidades
        sx={{
          position: 'absolute',
          color: '#fff',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold', // Opcional, puedes ajustar el grosor del texto
        }}
      >
        Bienvenido a UkuAcademy
      </Typography>
    </Box>
  );
}

export default Header;
