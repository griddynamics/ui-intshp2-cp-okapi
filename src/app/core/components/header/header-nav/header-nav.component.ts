import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  isSearchOpen = false;
  showMenu: Boolean = false;
  cartLength: Number;
  onSearchBtnClick() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.getCart().subscribe((data) => {
      this.cartLength = data.length;
    });
  }

}
