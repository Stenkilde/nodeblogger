(function() {
	'use strict';

	angular.module('porfolia')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Blog = {
				name: 'application.blog',
				url: '/',
				views: {
					'main@application': {
						templateUrl: 'modules/blog/index/blog.template.html',
						controller: 'Blog',
						controllerAs: 'blog'
					}
				}
			};

			var Blogview = {
				name: 'application.blogview',
				url: '/blog/:id',
				views: {
					'main@application': {
						templateUrl : 'modules/blog/view/blogview.template.html',
						controller  : 'Blogview',
						controllerAs: 'blogview'
					}
				}
			};

			$stateProvider.state(Blog);
			$stateProvider.state(Blogview);
		});
})();
