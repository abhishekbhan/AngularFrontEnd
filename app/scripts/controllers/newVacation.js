'use strict';


angular.module('frontendApp')
.controller('NewVacationCtrl', function($scope, $rootScope, $location, Vacation) {
	$scope.vacation = new Vacation();
	$scope.user = $rootScope.current_user;

	$scope.create = function() {
		Vacation.create({ vacation: { name: $scope.vacation.name, description: $scope.vacation.description, user_id: $scope.user.id } }, function() {
			return $location.url('/vacations');
		});
	};
});