const express = require('express');
const Class = require('../models/activities');
const cors = require('cors');

const router = express.Router();
router.use(cors());

router.post('/createActivitie', async (req, res) => {
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

router.get('/listActivities', async (req, res) => {

    try {
        const listActivities = await Class.find();

        return res.send(listActivities);
        
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao consultar lista de atividades'});
    }
});

router.post('/filteredActivitie', async (req, res) => {
    const { studentClass } = req.body;

    try {
        const filteredClass = await Class.find({ studentClass });

        return res.send(filteredClass);
        
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao consultar lista de atividades'});
    }
});

router.post('/deleteActivitie', async (req, res) => {
    const { _id } = req.body;

    try {
         await Class.findByIdAndDelete({ _id });

        return res.send('sucesso!');
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Falha ao deletar atividade'});
    }
});

module.exports = app => app.use('/class', router);