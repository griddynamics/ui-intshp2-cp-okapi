import { Component } from '@angular/core';
import { referenceLinks } from '../../../../../environments/environment';

@Component({
  selector: 'app-header-contacts',
  templateUrl: './header-contacts.component.html',
  styleUrls: ['./header-contacts.component.scss']
})
export class HeaderContactsComponent {
  public headerLinks: any = referenceLinks;
}
