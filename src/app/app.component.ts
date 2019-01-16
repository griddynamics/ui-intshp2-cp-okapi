import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Capstone-Angular-Project';

  isEnvironmentRoute = false;


  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd && e.url.indexOf('environment') >= 0 && !environment.production) {
        this.isEnvironmentRoute = true;
      }
    });
  }

}
