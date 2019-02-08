import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { throwIfAlreadyLoaded } from './guard/module-import-guard';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from '../shared/components/loader/loader.interceptor';

import { HeaderComponent } from './components/header/header.component';
import { HeaderContactsComponent } from './components/header/header-contacts/header-contacts.component';
import { HeaderNavComponent } from './components/header/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    SharedModule.forRoot(),
  ],

  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
