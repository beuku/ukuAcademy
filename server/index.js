const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


require('./db/connection');
const Users = require('./models/cliente');


app.post("/", async(req,res)=> {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);

})


app.delete("/formularios/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Obtenemos el ID de los parámetros
        const result = await Users.findByIdAndDelete(id);  // Eliminamos el formulario por ID
        
        res.status(200).json({ message: 'Formulario ELIMINAAAADOOOOO' });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el formulario");
    }
})



app.put("/formularios/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await Users.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el formulario");
    }
});




app.get("/formularios", async (req, res) => {
    try {
        const formularios = await Users.find(); 
        res.status(200).json(formularios); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Error papito, no se puede obtener formulario");
    }
});

app.listen(4000);
console.log("SERVIDOR CORRIENDO 🗣 🗣 🗣 🗣")

