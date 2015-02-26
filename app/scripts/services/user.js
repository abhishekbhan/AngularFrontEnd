var UserFactories;

UserFactories = angular.module("frontendApp.UserFactories", []);

UserFactories.factory('User', [
  '$http', function($http) {
    return {
      post: function(newUser) {
        return $http.post("http://localhost:3000/users.json", {
          user: newUser
        });
      }
    };
  }
]);