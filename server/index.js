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

