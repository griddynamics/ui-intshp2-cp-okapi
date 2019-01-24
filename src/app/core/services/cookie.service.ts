import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean) {
    let cookieString = `${name}=${value};`;
    if (expires) {
      let expireTerm = expires;
      if (typeof expires === 'number') {
        expireTerm = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
      } else {
        expireTerm = expires;
      }
      cookieString += `expires=${expireTerm.toUTCString()};`;
    }
    if (path) {
      cookieString += `path=${path};`;
    }
    if (domain) {
      cookieString += `domain=${domain};`;
    }
    if (secure) {
      cookieString += 'secure;';
    }
    document.cookie = cookieString;
  }

  get(name: string) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');

    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  delete(name) {
    this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'));
  }
}
