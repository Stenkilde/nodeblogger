(function() {
	'use strict';

	angular.module('porfolia')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Me = {
				name: 'application.blog',
				url: '/my-account',
				views: {
					'main@application': {
						templateUrl: 'modules/user/me/me.template.html',
						controller: 'Me',
						controllerAs: 'me'
					}
				}
			};

			$stateProvider.state(Me);
		});
})();
