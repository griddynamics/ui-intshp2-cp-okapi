import { Component, OnInit } from '@angular/core';
import { referenceLinks } from '../../../../../environments/environment';

@Component({
  selector: 'app-header-contacts',
  templateUrl: './header-contacts.component.html',
  styleUrls: ['./header-contacts.component.scss']
})
export class HeaderContactsComponent implements OnInit {

  public facebookURL: String = referenceLinks.facebookURL;
  public twitterURL: String = referenceLinks.twitterURL;
  public googlePlusURL: String = referenceLinks.googlePlusURL;
  public linkedinURL: String = referenceLinks.linkedinURL;

  constructor() { }

  ngOnInit() {
  }

}
