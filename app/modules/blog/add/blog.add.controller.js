(function () {
	'use strict';

	angular
		.module('blogster')
		.controller('Blogadd', Blogadd);

	/* @ngInject */
	function Blogadd(BlogFactory, $state, $stateParams) {
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
			}).then(function(result) {
				console.log(result);
				$state.transitionTo($state.current, $stateParams, {
					reload: true,
					inherit: false,
					notify: true
				});
			});
		}
	}

})();