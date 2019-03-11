import { Component } from '@angular/core';

import { referenceLinks } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public footerLinks: any = referenceLinks;
}
