'use strict';

/**
 * @ngdoc overview
 * @name epjTesteCsApp
 * @description
 * # epjTesteCsApp
 *
 * Main module of the application.
 */
angular
  .module('epjTesteCsApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('interceptorService');

    $routeProvider
      .when('/', {
        templateUrl: 'views/shots.html',
        controller: 'ShotsCtrl',
        controllerAs: 'shots'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/shots', {
        templateUrl: 'views/shots.html',
        controller: 'ShotsCtrl',
        controllerAs: 'shots'
      })
      .when('/shots/:id', {
        templateUrl: 'views/shot.html',
        controller: 'ShotCtrl',
        controllerAs: 'shot'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
