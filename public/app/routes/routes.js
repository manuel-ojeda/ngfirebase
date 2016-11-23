(function() {
	'use strict';

	angular
		.module('ngfirebase')
		.run(runApp)
		.config(config);

	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider
			.when('/login', {
				template: '<my-app></my-app>'
			})
			.when('/home', {
				template: '<my-home></my-home>',
				resolve: {
					'currentAuth': ['Auth', function(Auth) {
						return Auth.$requireSignIn();
					}]
				}
			})
			.otherwise('/login');
	}

	runApp.$inject = ['$rootScope', '$location']
	function runApp($rootScope, $location) {
		$rootScope.$on('$routeChangeError', function(event, next, previous, error) {
			if (error === 'AUTH_REQUIRED') {
				$location.path('/login');
			} else {
				console.log(error);
			}
		})
	}
})();