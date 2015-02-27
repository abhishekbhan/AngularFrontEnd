'use strict';

angular.module('frontendApp')
.controller('VacationCtrl', function($scope, $routeParams, Vacation, Attraction) {
	$scope.vacation = Vacation.get({ id: $routeParams['id'] });
	$scope.attractions = $scope.vacation.attractions;
	console.log($scope.vacation);
	console.log($scope.attractions);
	// $scope.attractions = $scope.vacation.attractions
	// $scope.newAttraction = function(newAttraction)	{

	// }
	// $scope.searchAttraction = function() {
		
	// 	});
	// };
});