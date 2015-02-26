'use strict';

angular.module('frontendApp')
.factory('Attraction', function($resource) {
  return $resource('http://localhost:3000/vacations/:vacation_id/attractions/:id', { id: '@id', vacation_id: '@vacation_id'},
    {
      'save'  : { method: 'POST'},
      // 'update': { method: 'PUT'},
      'show'	: { method: 'GET'},
      'search': { method: 'GET'},
      'create': { method: 'POST' }
    });
});