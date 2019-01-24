import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() productTitle;
  @Input() productDescription;

  title: string;
  description: string;

  ngOnInit() {
    this.title = this.productTitle;
    this.description = this.productDescription;
  }
}
