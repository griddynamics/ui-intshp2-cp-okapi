import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
  startLoading() {
    document.getElementById('spinner').style.display = 'block';
  }

  stopLoading() {
    document.getElementById('spinner').style.display = 'none';
  }
}
