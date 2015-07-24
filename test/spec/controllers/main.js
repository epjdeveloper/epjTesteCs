'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('epjTesteCsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('scope não deve ser nulo', function () {
    expect(scope).not.toBe(null);
  });
});
