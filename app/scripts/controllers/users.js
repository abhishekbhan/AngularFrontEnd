'use strict';
//registration

/**
 * @ngdoc function
 * @name frontendApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')

.controller("UsersCtrl", [
  "$scope", "$http", '$location', '$rootScope', 'User', function($scope, $http, $location, $rootScope, User) {
    $scope.newUser = {};
    return $scope.createUser = function() {
      return User.post($scope.newUser).success(function(data) {
      	console.log(data);
        $rootScope.current_user = data;
        return $location.url('/'); 
      });
    };
  }
]);

