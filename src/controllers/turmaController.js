const express = require('express');
const Turma = require('../models/class');

const router = express.Router();

router.post('/newClass', async (req, res) => {
    const { nTurma } = req.body;

    try {
        if (await Turma.findOne({ nTurma }))
        return res.status(400).send({ error: 'Turma já cadastrada, escolha uma turma diferente!' });

        const turma = await Turma.create(req.body);

        return res.send({ 
            turma,
         });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Turma não cadastrado!' });
    }
});

router.get('/listClass', async (req, res) => {
    
    try {
        const classes = await Turma.find();
    
        return res.send(classes);
    } catch (err) {
        return res.status(400).send({ error: 'Não foi possível consultar turmas, tente novamente!'});
    }
});

router.post('/deleteClass', async (req, res) => {
    const { _id } = req.body;
    console.log(_id);
    try {
         await Turma.findByIdAndDelete({ _id });

        return res.send('sucesso!');
        
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Falha ao deletar turma'});
    }
})

module.exports = app => app.use('/class', router);