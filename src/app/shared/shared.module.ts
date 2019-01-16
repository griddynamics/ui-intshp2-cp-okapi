import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { JoinUsComponent } from './components/join-us/join-us.component';


const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [JoinUsComponent],
  imports: [...MODULES],
  exports: [JoinUsComponent],

})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
 }
