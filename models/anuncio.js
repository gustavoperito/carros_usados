var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  titulo: String,
  descricao: String,
  preco: Number,
  modelo: {
    type: Schema.Types.ObjectId,
    ref: 'modelos'
  },
  anunciante: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios'
  },
  situacao: {type: String, default: 'ativo'}
});

mongoose.model('anuncios', _model);