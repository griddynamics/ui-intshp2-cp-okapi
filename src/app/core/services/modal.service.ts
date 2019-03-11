import { Injectable, ComponentRef, ReflectiveInjector, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalWindowComponent, ModalContext } from 'src/app/shared/components/modal-window/modal-window.component';
import { Options, ModalContainer } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private options = {containerType: ModalWindowComponent};
  private body = document.querySelector('body');

  private viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  registerViewContainer(vcf: ViewContainerRef) {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
    this.viewContainerRef = vcf;
  }

  open(type: any, data?: any, options: Options = this.options): Promise<any> {
    if (!this.viewContainerRef) {
      return Promise.reject('No view container');
    }
    this.body.classList.add('noscroll');
    const container = <ComponentRef<ModalContainer>> this.createContainer(options.containerType);
    const injector = ReflectiveInjector.resolveAndCreate([ModalContext], container.instance.container.injector);
    const context = injector.get(ModalContext);
    context.data = data;
    if (!options || options.hideOnBackdropClick) {
      container.instance.context = context;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
    const componentRef = container.instance.container.createComponent(componentFactory, 0, injector);
    return context.promise(container, this.viewContainerRef);
  }

  private createContainer (containerType: any): ComponentRef<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(containerType);
    return this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length);
  }
}
