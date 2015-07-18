var app = angular.module('porfolia', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

	$urlRouterProvider.otherwise('/');


});
