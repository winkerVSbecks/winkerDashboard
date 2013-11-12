'use strict';

angular.module('winkerDashboardApp')
	.controller('ViewComponentsCtrl', ['$scope', '$location', '$rootScope', 'Snapper', function ($scope, $location, $rootScope, Snapper) {
		$scope.snapper = Snapper;

		$rootScope.$on('$locationChangeSuccess', function(event){
      $scope.snapper.close();
      $scope.title = titles[$location.path()];
    });

    var titles = {
      '/': 'Winker Dashboard' ,
      '/settings': 'Settings',
      '/groceries': 'Shopping List', 
      '/weightTracker': 'Weight Tracker'
    };

	}]);
