'use strict';

describe('Controller: ViewcomponentsCtrl', function () {

  // load the controller's module
  beforeEach(module('winkerDashboardApp'));

  var ViewcomponentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewcomponentsCtrl = $controller('ViewcomponentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
