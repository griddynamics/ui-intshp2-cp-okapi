import { ViewContainerRef } from '@angular/core';
import { ModalContext } from '../components/modal-window/modal-context';

export interface IBanner {
  height?: number;
  width?: number;
  htmlSnippet: string;
}

export interface IFilter {
  type: string;
  name: string;
  fields?: Array<String>;
  range?: Array<PriceRange>;
}

export enum PriceRange {
  min = 0,
  max = 1
}

export interface ModalContainer {
  context: ModalContext;
  container: ViewContainerRef;
}

export interface Options {
  hideOnBackdropClick?: boolean;
  containerType: any;
}
