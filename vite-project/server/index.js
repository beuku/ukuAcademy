const express = require('express');
const { ObjectId } = require('mongodb');

const validateObjectId = (req, res, next) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send("ID no válido");
  }
  next();
};

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connnetion')
const Cliente = require('./Models/Cliente');
const { readBuilderProgram } = require('typescript');

app.post("/", async(req,res)=>{
  let cliente = new Cliente(req.body);
  let result = await cliente.save();
  res.send(result);
})

app.get('/formularios', async (req, res) => {
  try {
    const formularios = await Cliente.find({});
    console.log(formularios)
    res.status(200).json(formularios);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  
app.delete('/formularios/:id',  async (req, res) => {
  const { Types } = require('mongoose');
  const id = new Types.ObjectId(req.params.id);
  console.log(id)

  try {
    const deletedFormulario = await Cliente.findByIdAndDelete(id);
    if (!deletedFormulario) {
      return res.status(404).json({ error: 'Formulario no encontrado' });
    }
    res.status(200).json({ message: 'Formulario eliminado con éxito', deletedFormulario });
  } catch (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.put('/formularios/:id', validateObjectId ,async (req, res) => {
  const { Types } = require('mongoose');
  const id = new Types.ObjectId(req.params.id);
  const updateData = req.body;
  console.log(id)
  try {
    const result = await Cliente.findByIdAndUpdate(id, updateData, {new: true });
    res.status(200).json(result);
  }catch (error){
    console.error(error);
    res.status(500).send("Error al actualizar el formulario");
  }
});


app.listen(4000);

