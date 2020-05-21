const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Users = require('../models/usuarios');

const router = express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});

router.post('/register', async (req, res) => {
    const { emailAddress } = req.body;

    try {
        if (await Users.findOne({ emailAddress }))
        return res.status(400).send({ error: 'Usuário já cadastrado na base!' });

        const user = await Users.create(req.body);

        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Usuário não cadastrado!' })
    }
});

module.exports = app => app.use('/auth', router);