import React, {useEffect, useState } from "react";
import './style.css'
import Headercom from "./Header"
import { Button } from '@mui/material'


function GetFormulario() {
  const [data, setData] = useState([]);

  const handleDelete = async (e) =>{
    e.preventDefault();
    try{
      console.log(`http://localhost:4000/formularios/${e._id}`)
    const response = await fetch(`http://localhost:4000/formularios/${e._id}`,{
      method: 'delete',
      
    });
    const result = await response.json();
    console.log(result);
  }catch(error){
    console.log(error);
  }
  }


  useEffect(() => {
    const fetchFormulario = async () => {
      try {
        const response = await fetch("http://localhost:4000/formularios"); 
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
  console.log(data);
    fetchFormulario();
  }, []);

  return (
   <>
   <Headercom></Headercom>
    <div>
 <h3>GetFormulario</h3>
      <div>
        {data.map((item, index)=>(
        <div key={index} className="item">
          <p><strong>ID:</strong>{item._id}</p>
          <p><strong>Nombre:</strong>{item.name}</p>
          <p><strong>Apellido:</strong>{item.apellido}</p>
          <p><strong>Rut:</strong>{item.rut}</p>
          <p><strong>Email:</strong>{item.email}</p>
          <p><strong>Comentario:</strong>{item.comentario}</p>

          <div className="conter">  
            <div className="boton2">
             <Button variant="contained" color="error" onClick={handleDelete}>Eliminar</Button>
            </div>

            <div className="boton2">
             <Button variant="contained" color="success">Editar</Button>
            </div>
          </div>  
        </div>
        
        ))}
      </div>
      
      </div> 
      </>
  );
}

export default GetFormulario