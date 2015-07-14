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

		function addBlog(article) {
			var deferred = $q.defer();

			var url = '/api/blog';

			var storesPromise = $http.post(url,article).then(function(results) {
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