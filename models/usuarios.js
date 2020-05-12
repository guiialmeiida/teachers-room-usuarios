const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    typeUser: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('users', Users);