const express = require('express');
const Users = require('../models/usuarios');

const router = express.Router();

router.get('/listUsers', async (req, res) => {
    const users = await Users.find();

    return res.send(users);
});

router.get('/listUsers/:nTurma', async (req, res) => {
    const { nTurma } = req.params;

    try {
        const students = await Users.find();

        const filteredStudents = students.filter(student => student.studentClass == nTurma)

        console.log(filteredStudents);
        return res.send(filteredStudents);
        
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao consultar lista de alunos'});
    }

});

module.exports = app => app.use('/users', router);

