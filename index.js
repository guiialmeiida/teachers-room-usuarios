const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/controllers/authController')(app);
require('./src/controllers/projectController')(app);
require('./src/controllers/UserController')(app);
require('./src/controllers/AulaController')(app);
require('./src/controllers/turmaController')(app);

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor iniciado na porta 3000: http://localhost:3000/');
});