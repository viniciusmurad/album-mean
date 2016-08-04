module.exports = function (app) {

	var api = app.app.api.auth;
	app.post('/logar', api.logar);
	app.use('/*', api.validarToken);

}