import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-environment',
  template: `<h1>Environment</h1><pre>{{env | json}}</pre>`,
})
export class EnvironmentComponent implements OnInit {
  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
