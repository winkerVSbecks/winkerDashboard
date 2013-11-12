'use strict';

describe('Controller: GroceriesCtrl', function () {

  // load the controller's module
  beforeEach(module('winkerDashboardApp'));

  var GroceriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroceriesCtrl = $controller('GroceriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
