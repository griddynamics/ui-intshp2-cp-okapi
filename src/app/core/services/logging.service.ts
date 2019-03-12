import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logError(message: string, error: Error) {
    console.log('LoggingService: ' + error.message);
  }
}
