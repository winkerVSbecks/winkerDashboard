'use strict';

angular.module('winkerDashboardApp')
  .controller('GroceriesCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

    $scope.groceryList = [];
	  var ref = new Firebase("winkerdashboard.firebaseio.com/");
	  angularFire(ref, $scope, "groceryList"); 

	  $scope.removeItem = function (item) {
      $scope.groceryList.splice($scope.groceryList.indexOf(item), 1);
    };

    $scope.addItem = function () {
      $scope.groceryList.push({ 
      	task: $scope.newItem,
      	completed: false 
      });
      $scope.newItem = null;
    };

    $scope.toggleComplete = function (item) {
    	item.completed = !item.completed;
    };

  }]);