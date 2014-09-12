'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
	$scope.switcher = true;
	

	$scope.performAction = function () {
		//debugger;
		if(($scope.keyword != null) || ($scope.keyword != undefined) || ($scope.key != null) || ($scope.key != undefined) || (parseInt($scope.key) < 26)) {
			var dictionary = {'a':'',  'b':'', 'c':'', 'd':'', 'e':'', 'f':'', 'g':'', 'h':'', 'i':'', 'j':'', 'k':'', 'l':'', 'm':'', 'n':'', 'o':'', 'p':'', 'q':'', 'r':'', 's':'', 't':'', 'u':'', 'v':'', 'w':'', 'x':'', 'y':'', 'z':''
			}, startPosition = parseInt($scope.key), keywordLength = $scope.keyword.length;
			console.log('fdf');
			// to do properties from array
			var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			for (var i = 0;  i < keywordLength; i++) {
				alert('hello');
				dictionary[Object.keys(dictionary)[startPosition]] = $scope.keyword[i];
				array.splice(array.indexOf($scope.keyword), 1);
				console.log(array);
			}

		}


	}

}]);