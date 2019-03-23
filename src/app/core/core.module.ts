import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { HeaderComponent, HeaderContactsComponent, HeaderNavComponent, FooterComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatControllerComponent } from './components/chat-controller/chat-controller.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChatComponent } from './components/chat-controller/chat/chat.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
    ChatControllerComponent,
    ChatComponent
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderContactsComponent,
    HeaderNavComponent,
    ChatControllerComponent,
    ChatComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    DragDropModule,
    SharedModule.forRoot(),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
