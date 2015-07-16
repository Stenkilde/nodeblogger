(function () {
	'use strict';

	angular
		.module('blogster')
		.controller('Blog', Blog);

	/* @ngInject */
	function Blog(BlogFactory, $state, $stateParams) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.data		= {};

		activate();

		function activate() {
			return BlogFactory.getBlogs().then(function(results) {
				vm.data = results.data;
			});
		}

	}

})();