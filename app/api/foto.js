var api = {};

api.lista = function(req, res) {
	var fotos = [
		{_id: 1, titulo: 'Aurora boreal', url: 'https://www.oficinadanet.com.br/imagens/post/14596/aurora_nigruegahts_in_norway.jpg'},
		{_id: 1, titulo: 'Aurora boreal 2', url: 'https://www.oficinadanet.com.br/imagens/post/14596/aurora_nigruegahts_in_norway.jpg'}
	];

	res.json(fotos);
}

module.exports = api;