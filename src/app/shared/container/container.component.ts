import { Component, OnInit, ViewChild, ComponentRef, ComponentFactoryResolver, Type, OnDestroy, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit, OnDestroy {

  @ViewChild('componentsContainer', {read: ViewContainerRef}) componentsContainer: ViewContainerRef;

  private innerRef: ComponentRef;
  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
      const factories = Array.from(this.resolver['_factories'].keys());
      const factoryClass = <Type<any>> factories.find((factory: any) => factory.name === 'Inner');
      const innerComponentFactory = this.resolver.resolveComponentFactory(factoryClass);
      this.innerRef = this.componentsContainer.createComponent(innerComponentFactory);
  }

  ngOnDestroy(): void {
  if (this.innerRef) {
      this.innerRef.destroy();
  }
  }

}
