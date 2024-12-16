import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './pages/Listado';
import Editarformulario from './pages/Editarformulario';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './styles/App.css'
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Formulario/>} />
          <Route path="/Listado" element={<Listado />} />
          <Route path="editar/:id" element={<Editarformulario />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;