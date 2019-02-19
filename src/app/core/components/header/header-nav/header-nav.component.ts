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
  cartAmount: Number;
  onSearchBtnClick() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.getCartAmount().subscribe((cartAmount) => this.cartAmount = cartAmount);
  }
}
