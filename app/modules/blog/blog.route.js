(function() {
	'use strict';

	angular.module('blogster')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Blog = {
				name: 'blog',
				url: '/blog',
				templateUrl: 'modules/blog/index/blog.template.html',
				controller: 'Blog',
				controllerAs: 'blog'
			};

			var Blogview = {
				name: 'blogview',
				url: '/blog/:id',
				templateUrl: 'modules/blog/view/blogview.template.html',
				controller: 'Blogview',
				controllerAs: 'blogview'
			};

			$stateProvider.state(Blog);
			$stateProvider.state(Blogview);
		});
})();