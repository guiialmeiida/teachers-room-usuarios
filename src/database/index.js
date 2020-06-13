const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://teachers:leEY8JMLFCPC5kuE@cluster0-ezfgq.mongodb.net/TeachersRoom?retryWrites=true&w=majority', {
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