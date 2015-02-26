'use strict';

angular.module('frontendApp')
.factory('Photo', function($resource) {
  return $resource('http://localhost:3000/attractions/:attraction_id/photos/:id', { id: '@id' , attraction_id: '@attraction_id'},
    {
      'save'  : { method: 'POST'},
      // 'update': { method: 'PUT'},
      'show'	: { method: 'GET'},
      // 'search': { method: 'GET'}
    });
});