'use strict';

angular.module('frontendApp')
.controller('VacationCtrl', function($scope, $routeParams, Vacation) {
	$scope.vacation = Vacation.get({ id: $routeParams['id'] });
	// $scope.attractions = $scope.vacation.attractions
	// $scope.newAttraction = function(newAttraction)	{

	// }
	// $scope.searchAttraction = function() {
		
	// 	});
	// };
});