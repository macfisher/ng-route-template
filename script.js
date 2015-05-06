// script.js

var routeApp = angular.module('routeApp', []);

// routes
// set $locationProvider to true enable html5Mode, removing '#'
// from the URLs
routeApp.config(function($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})
		
		// about
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})
		
		// contact
		.when('/about', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
		
	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});


routeApp.controller('mainController', function($scope) {
	
	$scope.message = "Hello mainController.";
});

routeApp.controller('aboutController', function($scope) {
	
	$scope.message = "Hello aboutController.";
});

routeApp.controller('contactController', function($scope) {
	
	$scope.message = "Hello contactController.";
});
