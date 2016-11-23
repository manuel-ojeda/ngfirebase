(function() {
	'use strict';

	angular
		.module('ngfirebase')
		.factory('Auth', Auth);

	Auth.$inject = ["$firebaseAuth"];
	function Auth($firebaseAuth) {
		return $firebaseAuth();
	}
})();