(function() {
	'use strict';
	
  	var config = {
    	apiKey: "AIzaSyAM9OuTltvdLcckPHOxrxO-o50YqIzyIiw",
    	authDomain: "ngfirebase-5cbfb.firebaseapp.com",
    	databaseURL: "https://ngfirebase-5cbfb.firebaseio.com",
    	storageBucket: "ngfirebase-5cbfb.appspot.com",
    	messagingSenderId: "674896825207"
  	};

  	firebase.initializeApp(config);

	let myApp = {
		templateUrl: '../app/components/login.component.html',
		controller: ngCtrl
	};

	angular
		.module('ngfirebase')
		.component('myApp', myApp);

	ngCtrl.$inject = ['$firebaseAuth'];
	function ngCtrl($firebaseAuth) {
		let ng = this;
	}
})();