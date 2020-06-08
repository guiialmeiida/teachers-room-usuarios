const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);
require('./controllers/UserController')(app);
require('./controllers/AulaController')(app);
require('./controllers/turmaController')(app);

app.listen(3334, () =>{
    console.log('Servidor iniciado na porta 3334: http://localhost:3334/');
});