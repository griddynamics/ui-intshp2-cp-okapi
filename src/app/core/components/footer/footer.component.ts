import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public americanExpURL: String = environment.americanExpURL;
  public payPalURL: String = environment.payPalURL;
  public visaURL: String = environment.visaURL;
  public masterCardURL: String = environment.masterCardURL;
  public amazonURL: String = environment.amazonURL;

  constructor() { }

  ngOnInit() {
  }

}
