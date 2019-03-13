import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { SpinnerService } from './spinner.service';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL: String = environment.baseURL;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private spinner: SpinnerService) { }

  public create(path: string, options?): Observable<any> {
    return this.sendRequest('post', path, options);
  }

  public delete(path: string, options?): Observable<any> {
    return this.sendRequest('delete', path, options);
  }

  public injectHeader(key: string, value: string): void {
    this.headers.set(key, value);
  }

  public ejectHeader(key): void {
    this.headers.delete(key);
  }

  public get(path: string, options?: any, spinner?: boolean): Observable<any> {
    return this.sendRequest('get', path, options, spinner);
  }

  public update(path: string, options?): Observable<any> {
    return this.sendRequest('put', path, options);
  }

  private getUrl(path: string): string {
    return `${this.baseURL}/${path}`;
  }

  private handleError(error: HttpErrorResponse) {
    this.spinner.hide();
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

  private sendRequest(method: string, path: string, options?, spinner: boolean = true): Observable<any> {
    if (!this.http[method]) {
      throw new Error('Method does\'nt supported in HTTPClient');
    }
    if (spinner) {
      this.spinner.show();
    }
    return this.http[method](this.getUrl(path), {
      headers: this.headers,
      ...options
    }).pipe(
      tap(() => spinner && this.spinner.hide()),
      catchError(this.handleError.bind(this))
    );
  }
}
