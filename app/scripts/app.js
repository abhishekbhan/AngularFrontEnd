'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'frontendApp.UserFactories',
    // 'ngGPlaces'
    // 'frontendApp.VacationFactories'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'SessionsCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'UsersCtrl'
      })
      //index
      .when('/vacations',  {  
         templateUrl: 'views/vacations/index.html', 
         controller: 'VacationsCtrl' 
      })
      //new
      .when('/vacations/new',  {  
         templateUrl: 'views/vacations/new.html', 
         controller: 'NewVacationCtrl' 
      })
      //show
      .when('/vacations/:id',  {  
         templateUrl: 'views/vacations/show.html', 
         controller: 'VacationCtrl' 
      })
      //edit
      // .when('/vacations/:id/edit',  {  
      //    templateUrl: 'views/vacations/edit.html', 
      //    controller: 'EditVacationCtrl' 
      // })

      //new
      .when('/vacations/:vacation_id/attractions/new',  {  
         templateUrl: 'views/attractions/new.html', 
         controller: 'NewAttractionCtrl' 
      })
      //show
      .when('/vacations/:vacation_id/attractions/:id',  {  
         templateUrl: 'views/attractions/show.html', 
         controller: 'AttractionCtrl' 
      })

      .otherwise({
        redirectTo: '/'
      });
  });
