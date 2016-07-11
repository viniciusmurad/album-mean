var mongoose = require('mongoose');
var api = {};

api.lista = function(req, res) {
	var model = mongoose.model('Foto');
	model.find({})
		.then(function (fotos) {
			res.json(fotos);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		})
}

api.buscarId = function (req, res) {
	
}

api.deletarFoto = function (req, res) {
	
}

api.addFoto = function (req, res) {
	
}

api.atualizarFoto = function (req, res) {
	
}

module.exports = api;