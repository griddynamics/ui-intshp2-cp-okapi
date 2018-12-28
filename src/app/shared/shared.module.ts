import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [...MODULES],

})
export class SharedModule {
  static forRoot() {
    return [
      NgbModule.forRoot()
    ];
  }
 }
