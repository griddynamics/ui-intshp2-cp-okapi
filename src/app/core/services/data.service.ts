import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL: String = environment.baseURL;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  public create(path: string, options: RequestOptions): Observable<any> {
    return this.sendRequest('post', path, options);
  }

  public delete(path: string, options: RequestOptions): Observable<any> {
    return this.sendRequest('delete', path, options);
  }

  public injectHeader(key: string, value: string): void {
    this.headers.set(key, value);
  }

  public ejectHeader(key): void {
    this.headers.delete(key);
  }

  public get(path: string, options?: RequestOptions): Observable<any> {
    return this.sendRequest('get', path, options);
  }

  public update(path: string, options: RequestOptions): Observable<any> {
    return this.sendRequest('put', path, options);
  }

  private getUrl(path: string): string {
    return `${this.baseURL}/${path}`;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private sendRequest(method: string, path: string, options: RequestOptions): Observable<any> {
    if (!this.http[method]) {
      throw new Error('Method does\'nt supported in HTTPClient');
    }

    return this.http[method](this.getUrl(path), {
      headers: this.headers,
      ...options
    }).pipe(catchError(this.handleError));
  }
}
