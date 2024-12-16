const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Forms = require('./Models/Form')

app.post("/", async(req,res)=> {
    let form = new Forms(req.body);
    let result = await form.save();
    res.send(result);
})

app.get("/", async (req, res) => {
        try {
            const forms = await Forms.find();
            res.status(200).json(forms);
        } catch (error) {
        }
    });

app.delete("/", async (req, res) => {
        try {
          const { ids } = req.body;
          if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).send({ message: "No se enviaron IDs válidos para eliminar." });
          }
          const result = await Forms.deleteMany({ _id: { $in: ids } });
          res.send({
            message: `${result.deletedCount} elementos eliminados correctamente.`,
          });
        } catch (error) {
          res.status(500).send({ message: "Error al eliminar los elementos", error });
        }
});

app.put('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedForm = await Forms.findByIdAndUpdate(id, updatedData, { new: true });
      if (!updatedForm) {
          return res.status(404).json({ message: 'Formulario no encontrado' });
      }
      res.json({ message: 'Formulario actualizado con éxito', data: updatedForm });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el formulario' });
  }
});
      
app.listen(4000);