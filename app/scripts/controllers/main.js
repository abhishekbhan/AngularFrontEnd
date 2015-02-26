'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $location, $rootScope, $http) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.user = $rootScope.current_user;
    console.log($scope.user);
      return $scope.logout = function() {
        $http["delete"]("http://localhost:3000/sessions/" + $rootScope.current_user.id).success(function(data) {
        return $location.url('#/login');
      });
    }
  });
