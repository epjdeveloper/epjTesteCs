'use strict';

/**
 * @ngdoc function
 * @name epjTesteCsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the epjTesteCsApp
 */
angular.module('epjTesteCsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.model = {
      nome:'Edson Parizoti Junior',
      fone:'(11) 00000-0000',
      email:'epjdeveloper@hotmail.com'
    };
  });
