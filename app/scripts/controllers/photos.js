'use strict';


angular.module('frontendApp')
.controller('PhotosCtrl', function($scope, $filter,$rootScope, $routeParams, $location, Vacation, Photo, Attraction) {
	$scope.user = $rootScope.current_user;
	$scope.photos = Photo.query({ attraction_id: $routeParams['id'] }, function(photos)	{
		console.log(photos);
		// console.log(attraction.attraction.name);
		$scope.photos = $filter('filter')($scope.photos, { attraction_id: $routeParams['id'] });
		// $scope.photos = photos;
		
	});
});