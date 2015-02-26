'use strict';

angular.module('frontendApp')
.controller('NewAttractionCtrl', function($scope, $routeParams, $location, $http, Attraction, Vacation) {
	$scope.vacation = Vacation.get({ id: $routeParams['vacation_id'] });
	$scope.attraction = new Attraction();
	$scope.search = '';
	// $scope.user = $rootScope.current_user;
	$scope.results = '';

	// $scope.searchplace = function(search) {
	// 	$scope.search = search;
	// // 	// $scope.data = ngGPlacesAPI.textSearch({query: search}).then(
 // //  //   	function(data){
 // //  //     		return data;
 // //  //   });
	// 	$http.jsonp('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+ search +'&key=AIzaSyCoKHlYL3S90jKTEUZGMceScKavoR9FSQ0.json').success( function(results) {
	// 		console.log(results);
	// 		$scope.results.get({$scope.search: search});
	// 	// return results
	// 		scope.results = results.results
	// 		$location.url('#/vacations/:vacation_id/attractions/new', { vacation_id: $routeParams['vacation_id']});
	// 		// , {activity: 'search'}
	// 		});
		
	// };

	$scope.searchplace = function(search)	{
		// $scope.search = search;
		// console.log(search);
		$http.jsonp('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+ search +'&key=AIzaSyCoKHlYL3S90jKTEUZGMceScKavoR9FSQ0.json').success( function(results) {
				console.log(results);
		});
	};

	$scope.create = function() {
		Attraction.create({ attraction: { name: $scope.attraction.name, location: $scope.attraction.location, vacation_id: $scope.vacation.id } }, function() {
			return $location.url('/vacations');
		});
	};
	

});