import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';

const errorMessages = {
  0: 'Seems you are offline, try again later',
};

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    let message = 'Something bad happend. Please try again or contact administrator';
    let errorMessage;

    if (!navigator.onLine) {
      message = errorMessages['0'];
      notifier.showError(message);
    }

    if (error instanceof HttpErrorResponse) {
      // Server error
      errorMessage = errorService.getServerErrorMessage(error);
      // stackTrace = errorService.getServerErrorStackTrace(error);
      if (error.status !== 404) {
        notifier.showError(message);
      }

    } else {
      // Client Error
      errorMessage = errorService.getClientErrorMessage(error);
      notifier.showError(message);
    }
    // Always log errors
    logger.logError(errorMessage, error);
    console.error(error);
  }

}
