import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() alertText;
  @Input() headingText;
  @Input() messageText ? = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';

  constructor() { }

  ngOnInit() {
  }

}
