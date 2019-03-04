import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
  private spinner = document.getElementById('spinner');

  hideLoader() {
    setTimeout(() => {
      this.spinner.style.display = 'none';
    }, 200);
  }

  displayLoader() {
    this.spinner.style.display = '';
  }
}
