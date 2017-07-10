var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  nome: String,
  sigla: String
});

mongoose.model('marcas', _model);
