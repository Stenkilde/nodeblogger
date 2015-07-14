(function () {
	'use strict';

	angular
		.module('blogster')
		.factory('BlogFactory', BlogFactory);

	/* @ngInject */
	function BlogFactory($http, $q) {

		var service = {
			getBlogs: 	getBlogs,
			addBlog:	addBlog
		};

		return service;

		function addBlog() {
			var deferred = $q.derfer();

			var url = '/api/blog';

			var storesPromise = $http({
				method: 'POST',
				url: url,
				header: {'Content-type': 'application/json'},
				data: {
					header: vm.header,
					body: vm.body,
					created: vm.createdBy
				}
			}).then(function(results) {
				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function getBlogs() {
			var deferred = $q.defer();

			var url = '/api/blog';

			var storesPromise = $http.get(url);

			storesPromise.then(function(results) {

				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}

	}

})();