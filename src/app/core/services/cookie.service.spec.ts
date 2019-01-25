import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';

describe('CookieService', () => {

  const mockCookieName = 'name';
  const mockCookieValue = 'value';
  let cookie;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieService = TestBed.get(CookieService);
    expect(service).toBeTruthy();
  });

  it('get method should return correct value', () => {
    const cookieService: CookieService = TestBed.get(CookieService);
    cookieService.set(mockCookieName, mockCookieValue);
    cookie = cookieService.get(mockCookieName);
    expect(cookie).toBe('value');
  });

  it('delete method should work', () => {
    const cookieService: CookieService = TestBed.get(CookieService);
    cookieService.set(mockCookieName, mockCookieValue);
    cookieService.delete(mockCookieName);
    cookie = cookieService.get(mockCookieName);
    expect(cookie).not.toBeDefined();
  });

});
