'use strict';

/**
 * @ngdoc function
 * @name epjTesteCsApp.controller:ShotCtrl
 * @description
 * # ShotCtrl
 * Controller of the epjTesteCsApp
 */
angular.module('epjTesteCsApp')
  .controller('ShotCtrl', function ($scope, $resource, $routeParams) {

    $scope.model = {};

    $scope.inicializar = function() {
        $scope.obterShot();
    };

    $scope.obterShot = function(){
		  var Shot = $resource('https://api.dribbble.com/v1/shots/:id');

      var shot = Shot.get({id : $routeParams.id}, function() {
        $scope.model = shot;
      });
	  };

    $scope.inicializar();  	
});
