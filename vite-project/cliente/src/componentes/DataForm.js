import React from "react";

function DataFrom ({name, setname, apellido, setapellido, rut, setrut, email, setemail, comentario, setcomentario}){
    return( 
        <div>
            <div className="md-3">
                <label className="from-label">NOMBRE:</label>
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
                <label className="from-label">APELLIDO:</label>
                <input
                className="from-control"
                type="text"
                name="apellido"
                value={apellido}
                onChange={(e)=> setapellido(e.target.value)}
                required
                />
            </div>
            <br />

            <div className="md-3">
                <label className="from-label">RUT:</label>
                <input
                className="from-control"
                type="text"
                name="rut"
                value={rut}
                onChange={(e)=> setrut(e.target.value)}
                required
                />
        
            </div>
            <br />

            <div className="md-3">
                <label className="from-label">CORREO:</label>
                <input
                className="from-control"
                type="email"
                name="correo"
                value={email}
                onChange={(e)=> setemail(e.target.value)}
                required
                />
        
            </div>
            <br />

            <div className="md-3">
                <label className="from-label">COMENTARIO:</label>
                <input
                className="from-control"
                type="text"
                name="comentario"
                value={comentario}
                onChange={(e)=> setcomentario(e.target.value)}
                required
                />
        
            </div>
            <br />
        </div>
    );
};
export default DataFrom;