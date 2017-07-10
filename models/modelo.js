var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  nome: String,
  marca: {
    type: Schema.Types.ObjectId,
    ref: 'marcas'
  }
});

mongoose.model('modelos', _model);