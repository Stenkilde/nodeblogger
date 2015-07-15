var app = angular.module('blogster', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

	$urlRouterProvider.otherwise('/');


});