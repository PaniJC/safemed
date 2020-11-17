var safeApp = angular.module('safeApp', ['ngRoute']);

/*safeApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
  
              // route for the home page
              .when('home', {
                  templateUrl : '/index.html',
                  controller: 'safeCtrl'
              })
              // route for the contact page
              .when('/validar', {
                   templateUrl : '/validar_formula.html',
                   controller: 'safeCtrl'
                            })
              .otherwise({
                redirectTo: '/index.html',
                controller: 'safeCtrl'
              });

              $locationProvider.html5Mode(true).hashPrefix('!');

      });*/

safeApp.controller('safeCtrl', function($scope) {

    $scope.message = 'Hello world, this is the home page!';
    })
