import { Directive, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Directive({
  selector: '[appModalHolder]'
})
export class ModalHolderDirective {

  constructor(viewContainerRef: ViewContainerRef, modalService: ModalService) {
    modalService.registerViewContainer(viewContainerRef);
  }

}
