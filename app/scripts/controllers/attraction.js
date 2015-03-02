'use strict';

angular.module('frontendApp')
.controller('AttractionCtrl', function($scope, $routeParams, Vacation, Attraction, Photo, $location) {

	$scope.vacation = Vacation.get({ id: $routeParams.vacation_id }, function(vacation)	{
		// console.log(vacation);
		console.log(vacation.vacation.id)
		$scope.vacation_id = vacation.vacation.id;
	});

	$scope.attraction = Attraction.get({ id: $routeParams['id'] , vacation_id: $routeParams['vacation_id'] }, function(attraction)	{
		console.log(attraction);
		console.log($scope.attraction.attraction.id);
		$scope.attraction = attraction;
		// console.log(vacation.vacation.id)
		// $scope.vacation = vacation;
		// $scope.attractions = $scope.vacation.attractions
	});


	$scope.photo = new Photo();
	// console.log($scope.photo);

	$scope.create = function() {
		var url = $('.url').val()
  		var caption = $('.caption').val()
  		console.log(url)
		// console.log($scope.attraction.photo.url)
		Photo.create({ photo: { caption: caption, url: url, attraction_id: $scope.attraction.attraction.id } , attraction_id: $scope.attraction.attraction.id}, function() {
			return $location.path('/vacations/'+ $scope.vacation_id);
		});
	};
	
	// console.log($scope.attraction)


	

	// $scope.attractions = $scope.vacation.attractions
	// $scope.newAttraction = function(newAttraction)	{

	// }
	// $scope.searchAttraction = function() {
		
	// 	});
	// };
});