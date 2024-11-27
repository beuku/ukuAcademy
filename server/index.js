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

app.listen(4000);