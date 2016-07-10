module.exports = function (uri) {
	var mongoose = require('mongoose');

	mongoose.connect('mongodb://' + uri);

	mongoose.connection.on('connected', function () {
		console.log("Conectado");
	});

	mongoose.connection.on('error', function (error) {
		console.log("Erro de conexão: " + error);
	});

	mongoose.connection.on('disconnected', function () {
		console.log("MongoDB desconectado");
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function () {
			console.log("Servidor finalizado");
			process.exit(0);
		})
	});
}