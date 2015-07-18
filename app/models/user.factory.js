(function () {
	'use strict';

	angular
		.module('porfolia')
		.factory('UserFactory', UserFactory);

	/* @ngInject */
	function UserFactory($http, AuthFactory, $q) {

		var service = {
			login: login,
			logout: logout,
			getUser: getUser
		};

		return service;

		function login(username, password) {
			return $http({
				method: 'POST',
				url: '/login',
				header: {'Content-type': 'application/json'},
				data: {
					username: username,
					password: password
				}
			}).then(function success(response) {
				AuthFactory.setToken(response.data.token);
				return response;
			});
		}

		function logout() {
			AuthFactory.setToken();
		}

		function getUser() {
			if(AuthFactory.getToken()) {
				return $http.get('/me');
			} else {
				return $q.reject({ data: 'Client has no token unauth!' });
			}
		}

	}

})();
