'use strict';

angular.module('winkerDashboardApp')
	.controller('WeighttrackerCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

		$scope.weightMeasurements = [];
	  var ref = new Firebase("winkerdashboard.firebaseio.com/");
	  angularFire(ref, $scope, "weightMeasurements"); 

	  $scope.removeMeasurement = function (item) {
      $scope.weightMeasurements.splice($scope.weightMeasurements.indexOf(item), 1);
    };

    $scope.addMeasurement = function () {
      $scope.weightMeasurements.push({ 
      	task: $scope.newItem,
      	completed: false 
      });
      $scope.newItem = null;
    };

    $scope.editMeasurement = function (item) {
    	item.completed = !item.completed;
    };

  }]);


