import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdvertisingAreaComponent } from './components/advertising-area/advertising-area.component';
import { SafePipe } from '../pipes/safe.pipe';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  RouterModule,
];

@NgModule({
  declarations: [AdvertisingAreaComponent, SafePipe],
  imports: [...MODULES],
  exports: [...MODULES, AdvertisingAreaComponent, SafePipe],
})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
 }
