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
        <form>
          <h3 className="text-center pt-3">Formulario</h3>
          <DataFrom
          name={name}
          setname={setname}
          apellido={apellido}
          setapellido={setapellido}
          rut={rut}
          setrut={setrut}
          email={email}
          setemail={setemail}
          comentario={comentario}
          setcomentario={setcomentario}
          />
          
          <Button variant="contained"   onClick={collectData}>
            Guardar
          </Button>
        </form>
      </div>
    </>
  );
};

export default Formulario;

