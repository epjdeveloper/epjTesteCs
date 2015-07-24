'use strict';

/**
 * @ngdoc function
 * @name epjTesteCsApp.controller:ShotsCtrl
 * @description
 * # ShotsCtrl
 * Controller of the epjTesteCsApp
 */
angular.module('epjTesteCsApp')
  .controller('ShotsCtrl', function ($scope, $resource) {

    $scope.model = [];

    $scope.inicializar = function() {
        $scope.listarShots();
    };

  	$scope.listarShots = function(){
	  	var Shot = $resource('https://api.dribbble.com/v1/shots');

      var shots = Shot.query(function() {
        $scope.model = shots;
      });

  	};

    $scope.inicializar();
  });
