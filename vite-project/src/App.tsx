import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './Theme' 
import './styles/App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <Header />
        <Formulario />
        <Footer />
    </ThemeProvider>
  );
};

export default App;