'use strict';

describe('Service: interceptorService', function () {

  // load the service's module
  beforeEach(module('epjTesteCsApp'));

  // instantiate service
  var interceptorService;
  beforeEach(inject(function (_interceptorService_) {
    interceptorService = _interceptorService_;
  }));

  it('interceptorService deve ter uma function request', function () {
    expect(!!interceptorService.request).toBe(true);
  });

  it('accessToken não pode ser nulo', function () {
    expect(interceptorService.accessToken).not.toBe(null);
  });
  
  it('accessToken não pode estar em branco', function () {
    expect(interceptorService.accessToken.length).not.toEqual(0);
  });
  
  it('url da api do dribbble devem receber accessToken', function () {
    var config = {
      url:'https://api.dribbble.com/v1/shots'
    };
    
    interceptorService.request(config);
    expect(config.url).toMatch(/access_token/);
  });
  
  it('url convencionais não devem receber accessToken', function () {
    var config = {
      url:'#/shots'
    };
    
    interceptorService.request(config);
    expect(config.url).not.toMatch(/access_token/);
  });
});
