'use strict';

describe('Service: Snapper', function () {

  // load the service's module
  beforeEach(module('WinkerdashboardApp'));

  // instantiate service
  var Snapper;
  beforeEach(inject(function (_Snapper_) {
    Snapper = _Snapper_;
  }));

  it('should do something', function () {
    expect(!!Snapper).toBe(true);
  });

});
