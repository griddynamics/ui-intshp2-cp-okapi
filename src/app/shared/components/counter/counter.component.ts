import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() quantity;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged =  new EventEmitter<boolean>();
  change(increased) {
      this.onChanged.emit(increased);
  }

  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.quantity ++;
    // console.log(this.price);
    }

    minus() {
      if (this.quantity > 1) {
        this.quantity --;
      }
   }
}
