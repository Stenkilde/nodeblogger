(function() {
	'use strict';

	angular.module('blogster')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views : {
					//wrapping view
					'application': {
						templateUrl: 'modules/_application/application.template.html'
					},
					//Topbar
					'topbar@application': {
						templateUrl: 'modules/shared/topbar/topbar.template.html',
						controller: 'Topbar',
						controllerAs: 'topbar'
					}
				}
			};


			$stateProvider.state(Application);
		});
})();