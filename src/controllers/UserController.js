const express = require('express');
const Users = require('../models/usuarios');

const router = express.Router();

router.get('/listUsers', async (req, res) => {
    const users = await Users.find();

    return res.send(users);
});

module.exports = app => app.use('/users', router);