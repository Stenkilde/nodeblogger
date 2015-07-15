(function () {
	'use strict';

	angular
		.module('blogster')
		.controller('Topbar', Topbar);

	/* @ngInject */
	function Topbar(UserFactory) {
		/*jshint validthis: true */
		var vm 			= this;

		vm.login		= login;
		vm.logout		= logout;
		vm.handleError	= handleError;


		function login(username, password) {
			UserFactory.login(vm.username, vm.password).then(function success(response) {
				vm.user = response.data.user;
			}, handleError);
		}

		function logout() {
			UserFactory.logout();
			vm.user = null;
		}

		function handleError() {
			console.log('Error: ' + response.data);
		}
	}

})();