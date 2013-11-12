'use strict';

describe('Directive: ViewComponents', function () {

  // load the directive's module
  beforeEach(module('winkerDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-view-components></-view-components>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ViewComponents directive');
  }));
});
