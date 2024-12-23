import React, { useState } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';
import Textfield from './Textfield';


function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    rut: "",
    correo: "",
    comentario: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await response.json();
      console.log(result);

      setFormData({
        nombre: "",
        apellido: "",
        rut: "",
        correo: "",
        comentario: ""
      });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const irFormulario = () => navigate("/formulario");

  return (
    <form onSubmit={collectData}>

      <Textfield parametro="nombre" type="text" placeholder="ingrese su nombre" value={formData.nombre} onChange={handleInputChange} ></Textfield>
      <Textfield parametro="apellido" type="text" placeholder="ingrese su apellido" value={formData.apellido} onChange={handleInputChange}  ></Textfield>
      <Textfield parametro="rut" type="text" placeholder="ingrese su rut" value={formData.rut} onChange={handleInputChange}  ></Textfield>
      <Textfield parametro="correo" type="email" placeholder="ingrese su correo" value={formData.correo} onChange={handleInputChange}  ></Textfield>
      <Textfield  parametro="comentario"  placeholder="ingrese su comentario" type="textarea" rows="5" value={formData.comentario} onChange={handleInputChange}/>




      <button type="submit" className="btn btn-primary w-100"> Guardar </button>

      <button
        type="button"
        onClick={irFormulario}
        className="btn btn-secondary w-100 mt-3" > Ir a Formularios </button>
      
    </form>
    
  );
}

export default Form;
