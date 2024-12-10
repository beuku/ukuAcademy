import React, { useState } from "react";
import { Button } from '@mui/material'
import './style.css'
import Headercom from "./Header";

const Formulario = () => {
 const [name, setname] = useState("");
 const [apellido, setapellido] = useState("");
 const [rut, setrut] = useState("");
 const [email, setemail] = useState("");
 const [comentario, setcomentario] = useState("");

const collectData = async (e) =>{
  e.preventDefault();
  try{
  const response = await fetch('http://localhost:4000/',{
    method: 'post',
    body: JSON.stringify({name, apellido, rut, email, comentario}),
    headers:{
      'Content-Type': 'application/json'
    },
  });
  const result = await response.json();
  console.log(result);
}catch(error){
  console.log(error);
}
}


  return (
    <>
    <Headercom></Headercom>
    <div className="comtainer">

    <form  >
      <h3 className="text-center pt-3">Formulario</h3>
      <div className="md-3">
      <label className="from-label">Nombre: </label>
        <input
        className='from-control'
          type="text"
          name="nombre"
          value={name}
          onChange={(e)=> setname(e.target.value)}
          required
        />
     
      </div>
      <br />

      <div className="md-3">
        <label className="from-label">
        Apellido:
        <input
        className="from-control"
          type="text"
          name="apellido"
          value={apellido}
          onChange={(e)=> setapellido(e.target.value)}
          required
        />
      </label>
      </div>
      <br />
      <div className="md-3">
      <label className="from-label">
        RUT:
        <input
        className="from-control"
          type="text"
          name="rut"
          value={rut}
          onChange={(e)=> setrut(e.target.value)}
          required
        />
      </label>
      </div>
      <br />
      <div className="md-3">
      <label className="from-label">
        Correo:
        <input
        className="from-control"
          type="email"
          name="correo"
          value={email}
          onChange={(e)=> setemail(e.target.value)}
          required
        />
      </label>
      </div>
      <br />
      <div className="md-3">
      <label className="from-label">
        Comentario:
        <input
        className="from-control"
          type="text"
          name="comentario"
          value={comentario}
          onChange={(e)=> setcomentario(e.target.value)}
          required
        />
      </label>
      </div>
      <br />
      
      <Button variant="contained"  className="btn btn-success"  onClick={collectData} >
        Guardar
      </Button>
    </form>
    </div>
    </>
  );
};

export default Formulario;

