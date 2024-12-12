const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connnetion')
const Cliente = require('./Models/Cliente');

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
  const  id  = req.params;

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

app.listen(4000);

