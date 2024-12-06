const express = require('express');
const app = express();
app.use(express.json());

require('./db/connect');
const Users = require('./modelo/User');


app.post("/", async(req,res)=> {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);

})

app.listen(3001);