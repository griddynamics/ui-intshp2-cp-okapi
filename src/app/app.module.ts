import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { KillswitchService } from './core/services';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GlobalErrorHandlerService } from './core/services/global-error-handler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './core/services/server-error.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    KillswitchService,
    {
      provide: APP_INITIALIZER,
      useFactory: (killswitchService: KillswitchService) =>
        () => killswitchService.loadConfig(),
      multi: true,
      deps: [KillswitchService]
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
