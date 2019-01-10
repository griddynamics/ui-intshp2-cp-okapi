import { Component, OnInit } from '@angular/core';
import { referenceLinks } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public americanExpURL: String = referenceLinks.americanExpURL;
  public payPalURL: String = referenceLinks.payPalURL;
  public visaURL: String = referenceLinks.visaURL;
  public masterCardURL: String = referenceLinks.masterCardURL;
  public amazonURL: String = referenceLinks.amazonURL;

  constructor() { }

  ngOnInit() {
  }

}
