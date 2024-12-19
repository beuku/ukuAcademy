import React, { useState } from "react";
import { Button } from '@mui/material'
import DataFrom from "./DataForm";
import './style.css'
import Headercom from "./Header";

const Formulario = () => {
  const [name, setname] = useState();
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
     
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
      <Headercom></Headercom>
      <div className="comtainer">
        <form >
          <h3 className="text-center pt-3">Formulario</h3>
          <DataFrom datas="Nombre" type="text" placeholder="Escribe tu nombre" value={setname.name} onChange={(e)=> setname(e.target.value)} />
          <DataFrom datas="Apellido" type="text" placeholder="Escribe tu apellido" value={setapellido.apellido} onChange={(e)=> setapellido(e.target.value)} />
          <DataFrom datas="Rut" type="text" placeholder="Escribe tu rut" value={setrut.rut} onChange={(e)=> setrut(e.target.value)} />
          <DataFrom datas="Email" type="text" placeholder="Escribe tu correo" value={setemail.email} onChange={(e)=> setemail(e.target.value)} />
          <DataFrom datas="Comentario" type="text" placeholder="Por favor deja un comentario" value={setcomentario.comentario} onChange={(e)=> setcomentario(e.target.value)} />
          <Button variant="contained"   onClick={collectData}>
            Guardar
          </Button>
        </form>
      </div>
    </>
  );
};

export default Formulario;

