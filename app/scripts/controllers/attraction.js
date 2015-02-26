'use strict';

angular.module('frontendApp')
.controller('AttractionCtrl', function($scope, $routeParams, Vacation, Attraction) {
	$scope.attraction = Vacation.get({ id: $routeParams['id'] , vacation_id: $routeParams['vacation_id'] });
	// $scope.attractions = $scope.vacation.attractions
	// $scope.newAttraction = function(newAttraction)	{

	// }
	// $scope.searchAttraction = function() {
		
	// 	});
	// };
});