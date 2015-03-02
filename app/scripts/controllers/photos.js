'use strict';


angular.module('frontendApp')
.controller('PhotosCtrl', function($scope, $routeParams, $location, Vacation, Photo, Attraction) {

	$scope.photos = Photo.query({ attraction_id: $routeParams['id'] }, function(photos)	{
		console.log(photos);
		// console.log(attraction.attraction.name);
		$scope.photos = photos;
		
	});
});