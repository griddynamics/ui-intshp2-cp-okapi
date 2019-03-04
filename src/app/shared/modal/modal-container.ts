import { ModalContext } from './modal-context';
import { ViewContainerRef } from '@angular/core';

export interface ModalContainer {
    context: ModalContext;
    container: ViewContainerRef;
}
