import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Form from './components/Form';
import { Route,Routes } from 'react-router-dom';
import Formulario  from './components/formulario';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Form />}  />
     <Route path="/formulario" element={<Formulario />}  />
      
    </Routes>

  );
}

export default App;
