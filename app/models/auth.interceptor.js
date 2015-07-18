(function () {
	'use strict';

	angular
		.module('porfolia')
		.factory('AuthInterceptor', AuthInterceptor);

	/* @ngInject */
	function AuthInterceptor(AuthFactory) {

		var service = {
			request: addToken
		};

		function addToken(config) {
			var token = AuthFactory.getToken();
			if(token) {
				config.header = config.headers || {};
				config.header.Authorization = 'Bearer ' + token;
			}
			return config;
		}

		return service;


	}

})();
