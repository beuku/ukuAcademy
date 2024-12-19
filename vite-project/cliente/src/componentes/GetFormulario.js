import React, {useEffect, useState } from "react";
import './style.css'
import Headercom from "./Header"
import { TextField, Button } from '@mui/material'
import CompEdit from "./DataEdit";




function GetFormulario() {
  const [data, setData] = useState([]);
  const [editForm, setEditForm] = useState(null);
  
  const edittData = async (id) => {
    try {
      console.log(editForm)
      const response = await fetch(`http://localhost:4000/formularios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm), 
      });

      if (!response.ok) throw new Error("Error al actualizar el formulario");
      const updatedForm = await response.json();

      setData((prevData) =>
        prevData.map((form) => (form._id === id ? updatedForm : form))
      );
      alert("Formulario actualizado");
      setEditForm(null); 
    } catch (error) {
      alert("Hubo un error al actualizar el formulario");
      console.error(error);
    }
  };



  const handleDelete = async (id) =>{
    try{
    const response = await fetch(`http://localhost:4000/formularios/${id}`,{
      method: 'delete',
      
    });
    const result = await response.json();

  }catch(error){
    console.log(error);
  }
  }

  const handleEdit = (form) => {
    setEditForm(form); 
  };

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

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
                  <Button variant="contained" color="error" onClick={() => {handleDelete(item._id); window.location.reload();}}>Eliminar</Button>
                </div>

                <div className="boton1">
                  <Button variant="contained" color="success"  onClick={() => handleEdit(item)}>Editar</Button>
                </div>
              </div>  
            </div>
          
          ))}
          </div>
        </div> 

        {editForm && (
          <div >
            <h3>Editar Formulario</h3>
            <form className="comtainer"> 

              <CompEdit edit="Nombre:" name="name" type="text" value={editForm.name || ""} onChange={handleChange} />
              <CompEdit edit="Apellido" name="apellido" type="text" value={editForm.apellido || ""} onChange={handleChange} />
              <CompEdit edit="Rut:" name="rut" type="text" value={editForm.rut || ""} onChange={handleChange} />
              <CompEdit edit="Email:" name="email" type="text" value={editForm.email || ""} onChange={handleChange} />
              <CompEdit edit="Comentario:" name="comentario" type="text" value={editForm.comentario || ""} onChange={handleChange} />

              <div style={{ marginTop: "20px" }}>
                <Button variant="contained" color="success" onClick={() => {edittData(editForm._id);  window.location.reload();}}>
                  Guardar
                </Button>

                <Button variant="contained" color="error" onClick={() => setEditForm(null)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        )}
    </>  
  );
}

export default GetFormulario