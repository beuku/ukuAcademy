import React, { useState, useEffect } from "react";
import './Style2.css'

function Formulario() {
    const [formularios, setFormularios] = useState([]); 
    const [error, setError] = useState(null); 

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/formularios");
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                const data = await response.json();
                setFormularios(data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{overflow:"hidden"}}>
            <h1>Listado de Formularios</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {formularios.length === 0 ? (
                <p>No hay datos disponibles.</p>
            ) : (
                <ul>
                    {formularios.map((form, index) => (
                        <li key={index}>
                            <p><strong>Nombre:</strong> {form.nombre}</p>
                            <p><strong>Apellido:</strong> {form.apellido}</p>
                            <p><strong>RUT:</strong> {form.rut}</p>
                            <p><strong>Correo:</strong> {form.correo}</p>
                            <p><strong>Comentario:</strong> {form.comentario}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Formulario;
