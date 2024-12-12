import React, { useState } from 'react';
import './Style.css'
import { useNavigate } from 'react-router-dom'

function Form() {

    const [nombre, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [rut, setRut] = useState("");
    const [correo, setEmail] = useState("");
    const [comentario, setComentario] = useState("");
    const navigate = useNavigate(); 


    const collectData = async (e)=> {
      e.preventDefault();
      try{
        const response = await fetch('http://localhost:4000',{
          method: 'post' ,
          body: JSON.stringify({nombre,apellido,rut,correo,comentario}),
          headers:{
            'Content-Type': 'application/json'
          },
        });
      const result = await response.json();
      console.log(result);
      
      setName("");
      setApellido("");
      setRut("");
      setEmail("");
      setComentario("");

    } catch (error) {
      console.log("Error al enviar los datos:", error);
    }
  };

  const irFormulario =() => { 
    navigate("/formulario"); 
  }


    return (
              <form>
                <div className="mb-3">
                    
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" placeholder="" 
                  value={nombre}
                  onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="apellido" placeholder="" 
                   value={apellido}
                   onChange={(e) => setApellido(e.target.value)}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="rut" className="form-label">RUT</label>
                  <input type="text" className="form-control" id="rut" placeholder="" 
                   value={rut}
                   onChange={(e) => setRut(e.target.value)}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="correo" placeholder=""
                    value={correo}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="comentario" className="form-label">Comentario</label>
                  <textarea className="form-control" id="comentario" rows="3" placeholder="Escribe un comentario"
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}>


                  </textarea>
                </div>

                <button onClick={collectData} type="submit" className="btn btn-primary w-100">Guardar</button>

                <button 
                  type="button" 
                  onClick={irFormulario}
                  className="btn btn-secondary w-100 mt-3"> Ir a Formularios </button>
                </form>

              
         
    );
  }

  export default Form;