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
	$scope.onlyNumbers = /^\d+$/;
	$scope.onlyLetters = /^[a-zA-Z]+$/;
	$scope.inputText = "Some text to encrypt.";
	$scope.outputText = "Result of encryption.";
	

	$scope.resultFormation = function (dictionary) {
		var text = $scope.inputText.toLowerCase(), res = "";
		for (var i = 0; i < text.length; i++) {
			if (text[i] == " ") {
				res+= " ";
			}
			else if (text[i] == ",") {
				res+= ",";
			}
			else if (text[i] == ".") {
				res+= ".";
			}
			else if (text[i] == "?") {
				res+= "?";
			}
			else if (text[i] == "!") {
				res+= "!";
			}
			else if ($scope.switcher) {				
				res+= dictionary[text[i]];
				console.log("ITS INCRYPT");		
			}
			else if (!$scope.switcher) {		
				console.log("ITS DECRYPT");		
				for(var key in dictionary){
					if(dictionary[key] == text[i]){
						res+= key;
					}
				}
				console.log("keys " + res);
			}


		};
		$scope.outputText = res;
	}

	$scope.dictionaryFormation = function () {
		if(($scope.keyword != null) || ($scope.keyword != undefined) || ($scope.key != null) || ($scope.key != undefined) || (parseInt($scope.key) < 25)) {
			var dictionary = {'a':'',  'b':'', 'c':'', 'd':'', 'e':'', 'f':'', 'g':'', 'h':'', 'i':'', 'j':'', 'k':'', 'l':'', 'm':'', 'n':'', 'o':'', 'p':'', 'q':'', 'r':'', 's':'', 't':'', 'u':'', 'v':'', 'w':'', 'x':'', 'y':'', 'z':''
			}, startPosition = parseInt($scope.key), keywordLength = $scope.keyword.length, currentPosition = startPosition;
			var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			for (var i = 0;  i < keywordLength; i++) {
				if (currentPosition > 25) {
					currentPosition = 0;
				}
				$scope.keyword.toLowerCase();
				console.log('hello' + $scope.keyword[i]);
				dictionary[Object.keys(dictionary)[currentPosition]] = $scope.keyword[i];
				array.splice(array.indexOf($scope.keyword[i]), 1);
				currentPosition++;
			}
			for (var i = 0;  i < array.length; i++) {
				if (currentPosition > 25) {
					currentPosition = 0;
				}
				dictionary[Object.keys(dictionary)[currentPosition]] = array[i];
				currentPosition++;
			}
			console.log(array);
			console.log(dictionary);

			return dictionary;
		}
	}

	$scope.performAction = function () {
		var dictionary = $scope.dictionaryFormation();
		$scope.resultFormation(dictionary);

	}

}]);