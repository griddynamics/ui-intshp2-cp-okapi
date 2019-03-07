import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SpinnerService {
  private spinner: HTMLElement;

  constructor() {
    this.spinner = document.getElementById('spinner');
  }

  hide() {
    setTimeout(() => {
      this.spinner.style.display = 'none';
    }, 200);
  }

  show() {
    this.spinner.style.display = '';
  }
}
