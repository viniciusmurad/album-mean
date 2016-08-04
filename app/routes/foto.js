module.exports = function(app) {
	var api = app.app.api.foto;
	
	app.route('/v1/fotos')
		.get(api.lista)
		.post(api.addFoto);

	app.route('/v1/fotos/:id')
		.get(api.buscarId)
		.delete(api.deletarFoto)
		.put(api.atualizarFoto);
			
	// app.get('/v1/fotos/:id', api.buscarId);
	// app.delete('/v1/fotos/:id', api.deletarFoto);
	// app.get('/v1/fotos', api.lista);
	// app.post('/v1/fotos', api.addFoto);
}