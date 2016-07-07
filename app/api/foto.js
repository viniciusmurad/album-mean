var api = {};

var fotos = [
	{_id: 1, titulo: 'Aurora boreal', url: 'https://www.oficinadanet.com.br/imagens/post/14596/aurora_nigruegahts_in_norway.jpg'},
	{_id: 2, titulo: 'Aurora boreal 2', url: 'https://www.oficinadanet.com.br/imagens/post/14596/aurora_nigruegahts_in_norway.jpg'}
];

api.lista = function(req, res) {
	res.json(fotos);
}

api.buscarId = function (req, res) {
	var foto = fotos.find(function(foto) {
		return foto._id == req.params.id;
	});

	res.json(foto);
}

api.deletarFoto = function (req,res) {
	fotos.filter(function(foto) {
		return foto._id != req.params.id;	
	})

	res.sendStatus(204);
}

module.exports = api;