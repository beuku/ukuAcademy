import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Formulario from "./componentes/Datos"
import { Route, Routes } from 'react-router-dom';
import GetFormulario from './componentes/GetFormulario';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Formulario />} />
      <Route path='/formularios' element={<GetFormulario />} />
    </Routes>
  );
}

export default App;
