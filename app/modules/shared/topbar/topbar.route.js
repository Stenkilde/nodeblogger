(function() {
	'use strict';

	angular.module('blogster')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Topbar = {
				name: 'topbar',
				url: '/',
				templateUrl: 'modules/shared/topbar/topbar.template.html',
				controller: 'Topbar',
				controllerAs: 'topbar'
			};

			$stateProvider.state(Topbar);
		});
})();