
const mongoose = require('mongoose');

const clinetShema = new mongoose.Schema({
  name:String,
  apellido:String,
  rut:String,
  email:String,
  comentario:String
});
module.exports= mongoose.model("Cliente",clinetShema);

