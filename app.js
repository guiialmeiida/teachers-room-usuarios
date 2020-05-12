const express = require('express');
const mongoose = require('mongoose');

require("./models/usuarios");
const Users = mongoose.model('users');

const app = express();

app.use(express.json());

//Alterar a senha do BD ao executar
mongoose.connect('mongodb+srv://admin:<password>@cluster0-ezfgq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

app.post("/users", (req, res) => {
    console.log(`Realizou a chamada ao MS`);
    const users = Users.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Usuario não foi cadastrado com sucesso!"
        });
    
        return res.status(200).json({
            error: false,
            message: "Usuario cadastrado com sucesso!"
        })
    });
});

app.listen(3334, () =>{
    console.log("Servidor iniciado na porta 3334: http://localhost:3334/");
});