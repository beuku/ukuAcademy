import React, { useState, useEffect } from "react";
import './Style2.css';

function Formulario() {
    const [formularios, setFormularios] = useState([]); 
    const [error, setError] = useState(null); 
    const [editId, setEditId] = useState(null); 
    const [editedForm, setEditedForm] = useState({}); 

 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/formularios");
                if (!response.ok) throw new Error("Error al obtener los datos");

                const data = await response.json();
                setFormularios(data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);



    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/formularios/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error("Error al eliminar el formulario");

            setFormularios(formularios.filter(form => form._id !== id));
            alert('Formulario eliminado');
        } catch (error) {
            alert('Hubo un error al eliminar el formulario');
            console.error(error);
        }
    };

   
    const handleEdit = (form) => {
        setEditId(form._id); 
        setEditedForm(form); 
    };



    const handleSave = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/formularios/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedForm),
            });

            if (!response.ok) throw new Error("Error al actualizar el formulario");

            const updatedForm = await response.json();
            setFormularios(formularios.map(form => (form._id === id ? updatedForm : form)));
            setEditId(null); 
            alert('Formulario actualizado');
        } catch (error) {
            alert('Hubo un error al actualizar el formulario');
            console.error(error);
        }
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedForm({ ...editedForm, [name]: value });
    };


    const renderEditForm = () => (  <>

            <label>Nombre:</label>
            <input type="text" name="nombre" value={editedForm.nombre} onChange={handleChange} />
          
            <label>Apellido:</label>
            <input type="text" name="apellido" value={editedForm.apellido} onChange={handleChange} />
            
            <label>rut:</label>
            <input type="text" name="rut" value={editedForm.rut} onChange={handleChange} />
            
            <label>Correo:</label>
            <input type="text" name="correo" value={editedForm.correo} onChange={handleChange} />

            <label>Comentario:</label>
            <input type="text" name="comentario" value={editedForm.comentario} onChange={handleChange} />

            
            <button className="wea1" onClick={() => handleSave(editId)}>Guardar</button>
            <button className="wea2" onClick={() => setEditId(null)}>Cancelar</button>
        </>
    );



    const renderViewForm = (form) => (
        <>
            <p><strong>Nombre:</strong> {form.nombre}</p>
            <p><strong>Apellido:</strong> {form.apellido}</p>
            <p><strong>RUT:</strong> {form.rut}</p>
            <p><strong>Correo:</strong> {form.correo}</p>
            <p><strong>Comentario:</strong> {form.comentario}</p>
            <div>
                <button className="wea1" onClick={() => handleDelete(form._id)}>Eliminar</button>
                <button className="wea2" onClick={() => handleEdit(form)}>Editar</button>
            </div>
        </>
    );

    return (
        <div style={{ overflow: "hidden" }}>
            <h1>- Listado de Formularios -</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {formularios.length === 0 ? (
                <p>No hay datos disponibles.</p>
            ) : (
                <ul>
                    {formularios.map((form) => (
                        <li key={form._id}>
                            {editId === form._id ? renderEditForm() : renderViewForm(form)}
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Formulario;