angular.module('albumapp', ['diretivas','ngRoute', 'servicos'])
 .config(function($routeProvider, $locationProvider, $httpProvider) {

 	$httpProvider.interceptors.push('authInterceptor');
	$routeProvider.when('/fotos', {
 		templateUrl: 'partials/principal.html',
 		controller: 'FotosCtrl'
 	});

 	$routeProvider.when('/fotos/new', {
 		templateUrl: 'partials/foto.html',
 		controller: 'FotoCtrl'
 	});

 	$routeProvider.when('/fotos/edit/:fotoId', {
 		templateUrl: 'partials/foto.html',
 		controller: 'FotoCtrl'
 	});

 	$routeProvider.when('/login', {
 		templateUrl: 'partials/login.html',
 		controller: 'LoginCtrl'
 	});

 	$routeProvider.otherwise({ redirectTo: '/fotos' })
 })