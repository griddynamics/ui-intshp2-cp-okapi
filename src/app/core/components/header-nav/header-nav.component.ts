import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  public isSearchOpen = false;
  public showMenu: Boolean = false;
  public cartAmount: Number;

  constructor(private cartService: CartService) { }

  public ngOnInit(): void {
    this.cartService.getCartAmount().subscribe((cartAmount) => this.cartAmount = cartAmount);
  }

  public onSearchBtnClick(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }
}
