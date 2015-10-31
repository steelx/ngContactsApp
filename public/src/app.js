angular.module('contactsApp', ['ngRoute']);

angular.module('contactsApp')
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider){
          $routeProvider
              .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'views/list.html'
              });

          $locationProvider.html5Mode(true);
      }
    ])
    .controller('ListController', function($scope){
      $scope.title = 'Hellow Aj';
    });
