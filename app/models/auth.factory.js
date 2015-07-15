(function () {
	'use strict';

	angular
		.module('blogster')
		.factory('AuthFactory', AuthFactory);

	/* @ngInject */
	function AuthFactory($window) {

		var service = {
			getToken: getToken,
			setToken: setToken
		};

		var store 	= $window.localStorage;
		var key		= 'auth-token';

		function getToken() {
			return store.getItem(key);
		}

		function setToken() {
			if(token) {
				store.setItem(key, token);
			} else {
				store.removeItem(key);
			}
		}

		return service;


	}

})();