const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const authConfig = require('../config/auth');

const Users = require('../models/usuarios');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
};

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

        return res.send({ 
            user,
            token: generateToken({ id: user.id }),
         });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Usuário não cadastrado!' })
    }
});

router.post('/authenticate', async (req, res) => {
    const { emailAddress, password } = req.body;

    const user = await Users.findOne({ emailAddress }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado! ' });

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida!' });

    user.password = undefined;

    res.send({ 
        user,
        token: generateToken({ id: user.id }),
    });
});

module.exports = app => app.use('/auth', router);