'use strict';


angular.module('frontendApp')
.controller('VacationsCtrl', function($scope, $rootScope, $location, Vacation) {
	$scope.vacations = Vacation.query();
	$scope.user = $rootScope.current_user

	$scope.destroy = function(vacation) {
		vacation.$delete(function() {
			// This function is run once it has successfully deleted
			// the taco
			$location.url('#/vacations');
		});
	};
});