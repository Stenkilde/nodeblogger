(function () {
	'use strict';

	angular
		.module('porfolia')
		.controller('Blogview', Blogview);

	/* @ngInject */
	function Blogview(BlogFactory) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {
			return BlogFactory.getBlogs().then(function(results) {
				vm.data = results.data;
			});
		}
	}

})();
