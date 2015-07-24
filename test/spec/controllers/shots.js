'use strict';

describe('Controller: ShotsCtrl', function () {

  // load the controller's module
  beforeEach(module('epjTesteCsApp'));

  var ShotsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShotsCtrl = $controller('ShotsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('deve ter um objeto model não nulo', function () {
    expect(scope.model).not.toBe(null);
  });
});
