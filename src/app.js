const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.listen(3334, () =>{
    console.log('Servidor iniciado na porta 3334: http://localhost:3334/');
});