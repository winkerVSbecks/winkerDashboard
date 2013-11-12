'use strict';

describe('Directive: snapper', function () {

  // load the directive's module
  beforeEach(module('winkerDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<snapper></snapper>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the snapper directive');
  }));
});
