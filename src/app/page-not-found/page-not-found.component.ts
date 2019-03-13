import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../core/services';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private spinner: SpinnerService) {}
  ngOnInit(): void {
    this.spinner.hide();
  }
}
