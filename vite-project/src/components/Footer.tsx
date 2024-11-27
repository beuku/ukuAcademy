import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        height: '60px',
        backgroundColor: '#1E1E1E', // Color de fondo (puedes cambiarlo)
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginTop: 'auto', // Empuja el footer al final de la página
        textAlign: 'center',
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        ukuAcademy
      </Typography>
    </Box>
  );
};

export default Footer;
