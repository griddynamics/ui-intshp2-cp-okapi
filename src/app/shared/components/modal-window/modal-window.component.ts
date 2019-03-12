import { Component, HostBinding, ViewChild, ViewContainerRef } from '@angular/core';
import { animate, style, transition, trigger, animateChild, query } from '@angular/animations';
import { ModalContainer } from '../../interfaces';
import { ModalContext } from './modal-context';
export { ModalContext } from './modal-context';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  animations: [
    trigger('host', [
      transition(':leave', [
        query('@backdrop,@box', [
          animateChild()
        ])
      ]),
      transition(':enter', [
        query('@backdrop,@box', [
          animateChild()
        ])
      ]),
    ]),
    trigger('box', [
      transition(':leave', [
        style({
          transform: 'scale(1)'
        }),
        animate('100ms ease-out', style({
          transform: 'scale(1.2)'
        })),
        animate('300ms ease-in', style({
          transform: 'scale(0)'
        }))
      ]),
      transition(':enter', [
        style({
          transform: 'scale(0.5)'
        }),
        animate('200ms ease-out', style({
          transform: 'scale(1.2)'
        })),
        animate('100ms ease-out', style({
          transform: 'scale(1)'
        }))
      ]),
    ]),
    trigger('backdrop', [
      transition(':leave', [
        style({
          opacity: 1,
        }),
        animate('230ms ease-in', style({
          opacity: 0,
        }))
      ]),
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('230ms ease-in', style({
          opacity: 1,
        }))
      ]),
    ])
  ]
})
export class ModalWindowComponent implements ModalContainer {
  @HostBinding('@host') host;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  context: ModalContext;
}
