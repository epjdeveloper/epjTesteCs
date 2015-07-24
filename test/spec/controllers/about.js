'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('epjTesteCsApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('deve ter um objeto model com nome', function () {
    expect(scope.model.nome).not.toBe(null);

  });
  
  it('deve ter um objeto model com telefone', function () {
    expect(scope.model.telefone).not.toBe(null);

  });
  
  it('deve ter um objeto model com email', function () {
    expect(scope.model.email).not.toBe(null);

  });
});
