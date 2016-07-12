angular.module('albumapp').controller('LoginCtrl', function ($scope, $http, $location) {
	$scope.usuario = {};
	$scope.mensagem = '';

	$scope.logar = function() {
		var usuario = $scope.usuario;
		$http.post('/logar', {login: usuario.login, senha: usuario.senha})
			.then(function () {
				$location.path('/');
			}, function(error) {
				console.log(error);
				$scope.mensagem = "Login inválido";
			})
	}

})