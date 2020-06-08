const mongoose = require('../database');

const AulaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    studentClass: {
        type: Number,
        required: true,
    },
    response: [
        {
        name: {
            type: String,
        },
        description: {
            type: String,
        }
        }]
},
);

const aula = mongoose.model('aula', AulaSchema);

module.exports = aula;