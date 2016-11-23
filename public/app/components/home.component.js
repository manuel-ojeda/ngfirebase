(function() {
	'use strict';

	var myHome = {
		template: "<button class='waves-effect waves-light btn facebook' ng-click='$ctrl.logOut()'>Log out</button>",
		controller: homeCtrl
	};

	angular
		.module('ngfirebase')
		.component('myHome', myHome);

	homeCtrl.$inject = ['$firebaseAuth'];
	function homeCtrl($firebaseAuth) {
		var home = this;

		home.auth = $firebaseAuth();
		home.logOut = logOut;

		function logOut() {
			home.auth.$signOut();
			window.location.replace('/');
		}
	}
})();