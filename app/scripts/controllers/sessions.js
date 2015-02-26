'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')

.controller("SessionsCtrl", [
  "$scope", "$http", "$rootScope", "$location", function($scope, $http, $rootScope, $location) {
    return $scope.addSession = function(loginUser) {
      return $http.post("http://localhost:3000/login.json", {
        user: loginUser
      }).success(function(user) {
        console.log(user);
        $rootScope.current_user = user;
        return $location.url('/');
      });
    };
  }
])