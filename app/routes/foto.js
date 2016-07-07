module.exports = function(app) {
	var api = app.api.foto;
	app.get('/v1/fotos', api.lista);
	app.route('/v1/fotos/:id')
		.get(api.buscarId)
		.delete(api.deletarFoto);
		
	// app.get('/v1/fotos/:id', api.buscarId);
	// app.delete('/v1/fotos/:id', api.deletarFoto);
}