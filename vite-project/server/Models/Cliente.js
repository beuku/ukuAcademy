
const mongoose = require('mongoose');

const   clinetShema = new  mongoose.Schema({
  name:String,
  apellido:String,
  rut:String,
  email:String,
  comentario:String
},{
  collection:"clientes",

},{
  methods:{
    
    findDocuments() {
      return mongoose.model('Cliente').find({});
  }
}
});
module.exports= mongoose.model("Cliente",clinetShema);

