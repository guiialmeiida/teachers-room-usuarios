const mongoose = require('../database');

const TurmaSchema = new mongoose.Schema({
    nTurma: {
        type: Number,
        required: true,
        unique: true,
    },
    alunos: [
        {
        firstName: {
            type: String,
        },
        emailAddress: {
            type: String,
        }
        }]
},
);

const turma = mongoose.model('turma', TurmaSchema);

module.exports = turma;