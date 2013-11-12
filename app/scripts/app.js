'use strict';

angular.module('winkerDashboardApp', [
  'firebase',
  'ui.route'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/groceries', {
        templateUrl: 'views/groceries.html',
        controller: 'GroceriesCtrl'
      })
      .when('/weightTracker', {
        templateUrl: 'views/weightTracker.html',
        controller: 'WeighttrackerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });