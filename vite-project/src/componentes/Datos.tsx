import React, { useState } from "react";
import { Button } from '@mui/material'

interface FormData {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
  comentario: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    rut: "",
    correo: "",
    comentario: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGuardar = () => {
    console.log("Información del formulario:", formData);
  };

  return (
    <form style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        RUT:
        <input type="text" name="rut" value={formData.rut} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Comentario:
        <textarea
          name="comentario"
          value={formData.comentario}
          onChange={handleChange}
          rows={4}
          required
        />
      </label>
      <br />
      <Button variant="contained" onClick={handleGuardar}>Guardar</Button>
    </form>
  );
};

export default Formulario;

