var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  nome: String,
  celular: String
});

mongoose.model('usuarios', _model);
