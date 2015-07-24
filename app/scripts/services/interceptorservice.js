'use strict';

/**
 * @ngdoc service
 * @name epjTesteCsApp.interceptorService
 * @description
 * # interceptorService
 * Factory in the epjTesteCsApp.
 */
angular.module('epjTesteCsApp')
  .factory('interceptorService', function () {
    var sessionInjector = {
      
          accessToken:'9579b369892293f39ee4c18be5e5130ffbba9e5b17fe92ac655172790aa45a24',
      
          request: function(config) {
          
          if(/api\.dribbble/i.test(config.url)){
            config.url += "?access_token=" + sessionInjector.accessToken;          
          }
          
          return config;
        }
    };

    return sessionInjector;
  });
