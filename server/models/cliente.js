const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    rut:String,
    correo:String,
    comentario:String
});

module.exports = mongoose.model("cliente.js",clientSchema)