import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-header-contacts',
  templateUrl: './header-contacts.component.html',
  styleUrls: ['./header-contacts.component.scss']
})
export class HeaderContactsComponent implements OnInit {

  public facebookURL: String = environment.facebookURL;
  public twitterURL: String = environment.twitterURL;
  public googlePlusURL: String = environment.googlePlusURL;
  public linkedinURL: String = environment.linkedinURL;

  constructor() { }

  ngOnInit() {
  }

}
