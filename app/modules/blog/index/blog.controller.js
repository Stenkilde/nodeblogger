(function () {
	'use strict';

	angular
		.module('blogster')
		.controller('Blog', Blog);

	/* @ngInject */
	function Blog(BlogFactory) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.data		= {};
		vm.save		= save;

		activate();

		function activate() {
			return BlogFactory.getBlogs().then(function(results) {
				vm.data = results.data;
			});
		}

		function save() {
			BlogFactory.addBlog({
				header: vm.header,
				createdBy: vm.createBy,
				body: vm.body
			}).then(function(result) { console.log(result) });
		}
	}

})();