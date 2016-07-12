module.exports = function (app) {
	var mongoose = require('mongoose');
	var jwt = require('jsonwebtoken');
	var api = {};
	var model = mongoose.model('Usuario');

	api.logar = function(req,res) {
		model.findOne({login: req.body.login, senha: req.body.senha})
				.then(function(usuario) {
					if (!usuario) {
						console.log('Login inválido');
						res.sendStatus(401);
					} else {
						var token = jwt.sign({login: usuario.login}, app.get('secret'), {
							expireIn: 86400
						})
						console.log('Enviando token para o header');
						res.set('x-access-token',token);
						res.end();
					}
				}, function(error) {
					console.log('Login inválido');
					res.sendStatus(401);
				})
	}

	api.validarToken = function(req, res, next) {
		var token = req.headers['x-access-token'];
		if (token) {
			console.log('Validar token');
			jwt.verify(token, app.get('secret'), function(err, decoded) {
				if(err) {
					console.log('Token inválido');
					res.sendStatus(401);
				}
					req.usuario = decoded;
					next();
				})
		} else {
			console.log('Token não enviado');
			res.sendStatus(401);
		}
	}

	return api;
}