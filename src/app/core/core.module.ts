import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './guard/module-import-guard';
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
  ], exports: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    SharedModule.forRoot(),

  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
