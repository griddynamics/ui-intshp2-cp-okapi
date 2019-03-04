import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalHolderDirective } from './modal-holder.directive';
import { PopUpComponent } from './pop-up/pop-up.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule
  ],
  declarations: [ModalContainerComponent, ModalHolderDirective, PopUpComponent],
  entryComponents: [ModalContainerComponent, PopUpComponent],
  exports: [ModalContainerComponent, ModalHolderDirective, PopUpComponent],
  providers: [ModalService]
})
export class ModalModule { }

