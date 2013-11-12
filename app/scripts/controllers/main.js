'use strict';

angular.module('winkerDashboardApp')
	.controller('MainCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

		// Load data
		$scope.groceryList = [];
	  var ref = new Firebase("winkerdashboard.firebaseio.com/");
	  angularFire(ref, $scope, "groceryList"); 
	  // Calculate items to buy
	  $scope.itemsToBuy = 0;
	  $scope.$watch('groceryList', function () {
	  	angular.forEach($scope.groceryList, function(item) {
		  	if (!item.completed) {
		  		$scope.itemsToBuy++;
		  	}
	  	});
	  });

		// Style and Size elements
		$scope.sizeElements = function () {
			var h = ( $scope.getHeight()-60 )/2;
			$scope.halfTall = { 'height': h + 'px' };
			var nh = Math.ceil( 0.8*(h-48) );
			$scope.number = { 
				'font-size': nh + 'px',
				'display': 'block',
				'height': nh + 'px',
				'line-height': nh + 'px',
				'font-weight': 700
			 };
			 var ih = Math.ceil( 0.2*(h-48) );
			 $scope.info = { 
				'font-size': ih/2 + 'px',
				'display': 'block',
				'height': ih + 'px',
				'line-height': ih + 'px',
				'font-weight': 400
			 };
		};


		// Handle resizing  
		window.onresize = function () {
    	$scope.$apply();
  	};
  	$scope.getWidth = function () {
      return $(window).width();
    };
    $scope.getHeight = function () {
      return $(window).height();
    };
  	$scope.$watch($scope.getWidth, function () {
  		$scope.sizeElements();
	  });
	  $scope.$watch($scope.getHeight, function () {
	  	$scope.sizeElements();
	  });

	  $scope.sizeElements();

	}]);

