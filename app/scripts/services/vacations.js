'use strict';

angular.module('frontendApp')
.factory('Vacation', function($resource) {
  return $resource('http://localhost:3000/vacations/:id', { id: '@id'},
    {
      'save'  : { method: 'POST'},
      'update': { method: 'PUT'},
      'show'  : { method: 'GET'},
      'create': { method: 'POST' }
    });
});