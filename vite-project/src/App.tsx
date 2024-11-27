import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

import './styles/App.css'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Formulario />
      <Footer />
    </div>
  );
};

export default App;