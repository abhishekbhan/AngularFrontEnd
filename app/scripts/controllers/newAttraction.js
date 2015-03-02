'use strict';

angular.module('frontendApp')
.controller('NewAttractionCtrl', function($scope, $rootScope, $route, $routeParams, $location, $http, Attraction, Vacation) {
	// $scope.vacation = Vacation.get({ id: $route.current.params.vacation_id });
	$scope.user = $rootScope.current_user;
	$scope.vacation = Vacation.get({ id: $routeParams.vacation_id }, function(vacation)	{
		console.log(vacation);
		console.log(vacation.vacation.id)
		$scope.vacation_id = vacation.vacation.id;
	});
	
	// $scope.vacation_id = $scope.vacation.id;
	$scope.attraction = new Attraction();
	// $scope.search = '';
	 // $scope.user = $rootScope.current_user;
	// $scope.results = '';

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

	// $scope.searchplace = function(search)	{

	// 	$scope.search = search;
	// 	console.log(search);
	// 	$scope.response = $http.jsonp('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+ search +'&key=AIzaSyCoKHlYL3S90jKTEUZGMceScKavoR9FSQ0')
	// 	$scope.response.success( function(results) {
	// 			console.log(results);
	// 	});
	// };

	$scope.create = function() {
		Attraction.create({ attraction: { name: $scope.attraction.name, location: $scope.attraction.location, url: $scope.attraction.url, vacation_id: $scope.vacation_id } , vacation_id: $scope.vacation_id}, function() {
			return $location.url('/vacations/:vacation_id/attractions', {vacation_id: $scope.vacation_id});
		});
	};
	

});


 // $scope.searchSoundCloud = function(){
 //          var searchString = $('#searchForm').find('input[name="searchString"]').val()
 //          var req = {
 //               method: 'POST',
 //               url: 'http://localhost:8000/soundCloudSearch',
 //               headers: {
 //                 'Content-Type': "application/json"
 //               },
 //               data: { searchString: searchString },
 //              }                     
 //            $http(req).success(function(res){
 //              var tracks = res;
 //              for(i=0; i<tracks.length; i++){
 //                if(!tracks[i].artwork_url){
 //                  tracks[i].artwork_url= 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Squarepusher_Enstrobia.jpg/220px-Squarepusher_Enstrobia.jpg';
 //                };
 //              }
 //              $scope.tracks = tracks;
 //            })
 //          .error(function(res){console.log(res)})                                       
 //        };
