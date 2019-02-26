import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
  private spinner = document.getElementById('spinner');

  hideLoader() {
    this.spinner.style.display = 'none';
  }

  displayLoader() {
    this.spinner.style.display = '';
  }
}
