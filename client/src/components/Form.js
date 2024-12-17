import React, { useState } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

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
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          placeholder="Ingresa tu apellido"
          value={formData.apellido}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rut" className="form-label">RUT</label>
        <input
          type="text"
          className="form-control"
          id="rut"
          name="rut"
          placeholder="Ingresa tu RUT"
          value={formData.rut}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          name="correo"
          placeholder="Ingresa tu correo"
          value={formData.correo}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="comentario" className="form-label">Comentario</label>
        <textarea
          className="form-control"
          id="comentario"
          name="comentario"
          rows="3"
          placeholder="Escribe un comentario"
          value={formData.comentario}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Guardar
      </button>

      <button
        type="button"
        onClick={irFormulario}
        className="btn btn-secondary w-100 mt-3"
      >
        Ir a Formularios
      </button>
    </form>
  );
}

export default Form;
