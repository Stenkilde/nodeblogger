(function() {
	'use strict';

	angular.module('porfolia')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Topbar = {
				name: 'topbar',
				url: '/',
				templateUrl: 'modules/shared/topbar/topbar.template.html',
				controller: 'Topbar',
				controllerAs: 'topbar'
			};

			var Blogadd = {
				name: 'application.blogadd',
				url: '/create',
				views: {
					'main@application': {
						templateUrl : 'modules/blog/add/blogadd.template.html',
						controller  : 'Blogadd',
						controllerAs: 'blogadd'
					}
				}
			};

			$stateProvider.state(Topbar);
			$stateProvider.state(Blogadd);
		});
})();
