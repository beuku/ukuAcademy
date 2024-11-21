
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const rut = document.getElementById('rut').value;
    const correo = document.getElementById('correo').value;
    const comentario = document.getElementById('comentario').value;
  
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('RUT:', rut);
    console.log('Correo:', correo);
    console.log('Comentario:', comentario);
   
    const formData = {
      nombre,
      apellido,
      rut,
      correo,
      comentario
    };
  
    console.log('Datos del formulario:', formData);
    alert('Información guardada. Revisa la consola.');
  });