//import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KillswitchService } from './core/services/killswitch.service';
import { SharedModule } from './shared/shared.module';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
   // BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    KillswitchService,
    {
        provide: APP_INITIALIZER,
        useFactory: (killswitchService: KillswitchService) =>
          () => killswitchService.loadConfig(),
        multi: true,
        deps: [KillswitchService]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {  }
