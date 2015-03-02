'use strict';

angular.module('frontendApp')
.controller('VacationCtrl', function($scope, $rootScope, $routeParams, Vacation, Attraction) {
	// $scope.vacation = Vacation.get({ id: $routeParams['id'] });
	// $scope.attractions = Attraction.get({ vacation_id: $routeParams['id']});
	// console.log($scope.vacation.vacation);
	// console.log($scope.attractions);

	$scope.user = $rootScope.current_user;
	$scope.vacation = Vacation.get({ id: $routeParams['id'] }, function(vacation)	{
		console.log(vacation);
		// console.log(vacation.vacation.id)
		$scope.vacation = vacation;
		$scope.attractions = $scope.vacation.attractions
		console.log($scope.vacation.attractions)
	});

	// $scope.destroy = function(attraction) {
	// 	console.log(attraction)
	// 	attraction.$delete(function() {
	// 		// This function is run once it has successfully deleted
	// 		// the taco
	// 		$location.url('#/vacations/:id', { id: $scope.vacation.id});
	// 	});
	// };

	
	// $scope.newAttraction = function(newAttraction)	{

	// }
	// $scope.searchAttraction = function() {
		
	// 	});
	// };
});