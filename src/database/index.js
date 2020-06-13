const mongoose = require('mongoose');

mongoose.connect('mongodb://teachers:almeida22@mongo_teachers-usuario:27017/teachers-usuario', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
    console.log('Conexão com MongoDB realizada com sucesso!');
}).catch((erro) => {
    console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!');
});

mongoose.Promise = global.Promise;

module.exports = mongoose;