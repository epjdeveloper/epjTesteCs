'use strict';

describe('Controller: ShotCtrl', function () {

  // load the controller's module
  beforeEach(module('epjTesteCsApp'));

  var ShotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShotCtrl = $controller('ShotCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('deve ter um objeto model não nulo', function () {
    expect(scope.model).not.toBe(null);
  });
});
