'use strict';


angular.module('frontendApp')
.controller('VacationsCtrl', function($scope, $filter, $rootScope, $location, Vacation) {
	// $scope.vacations = Vacation.query();
	$scope.user = $rootScope.current_user;
	console.log($scope.user)
	$scope.vacations = Vacation.query({ user_id: $scope.user.id }, function(vacations)	{
		$scope.vacations = $filter('filter')($scope.vacations, {user_id: $scope.user.id});
		console.log(vacations);
		// console.log(vacation.vacation.id)
		// $scope.vacations = vacations;
		// $scope.attractions = $scope.vacation.attractions
	});
	

	$scope.destroy = function(vacation) {
		console.log(vacation)
		vacation.$delete(function() {
			// This function is run once it has successfully deleted
			// the taco
			$location.url('#/vacations');
		});
	};
});