import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  set(name: string, value: string, expires?: number, path?: string, domain?: string, secure?: boolean) {
    const date = new Date();
    date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';'
                      + 'expires =' + date.toUTCString() + ';'
                      + 'path =' + path + ';'
                      + 'domain =' + domain + ';'
                      + 'secure =' + secure + ';';
  }

  get(name: string) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');

    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  delete(name: string) {
    const date = new Date();
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }
}
