import React from "react";
import Formulario from "./componentes/Datos"


const App: React.FC = () => {
    
    return (
        
      <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
        <h1>Formulario con Componentes</h1>
        <Formulario />
        
      </div>
    );
  };
  
  export default App;