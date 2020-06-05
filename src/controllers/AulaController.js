const express = require('express');
const Class = require('../models/activities');
const cors = require('cors');

const router = express.Router();
router.use(cors());

router.post('/createClass', async (req, res) => {
    const { name } = req.body;

    try {
        if (await Class.findOne({ name }))
        return res.status(400).send({ error: 'Aula já cadastrada, realize uma nova criação!' });

        const aula = await Class.create(req.body);

        return res.send({ 
            aula,
         });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Aula não cadastrado!' });
    }
});

router.get('/listClass', async (req, res) => {

    try {
        const listClass = await Class.find();

        return res.send(listClass);
        
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao consultar lista de atividades'});
    }
})

module.exports = app => app.use('/class', router);