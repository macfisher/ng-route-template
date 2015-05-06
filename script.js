// script.js

var routeApp = angular.module('routeApp', ['ngRoute', 'ngAnimate']);

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
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
		
	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});


routeApp.controller('mainController', function($scope) {
	
	$scope.message = "Hello mainController.";
	$scope.pageClass = 'page-home';
});

routeApp.controller('aboutController', function($scope) {
	
	$scope.message = "Hello aboutController.";
	$scope.pageClass = 'page-about';
});

routeApp.controller('contactController', function($scope) {
	
	$scope.message = "Hello contactController.";
	$scope.pageClass = 'page-contact';
});
