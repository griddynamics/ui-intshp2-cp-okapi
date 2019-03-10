import { Component, OnInit } from '@angular/core';
import { CartService, ModalService  } from '../../services';
import { ShoppingCartComponent } from 'src/app/shared/components';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  public isSearchOpen = false;
  public showMenu: Boolean = false;
  public cartAmount: Number;

  constructor(
    private cartService: CartService,
    private modalService: ModalService
  ) { }

  public ngOnInit(): void {
    this.cartService.getCartAmount().subscribe((cartAmount) => this.cartAmount = cartAmount);
  }

  public toggleCartPopup() {
    this.modalService.open(ShoppingCartComponent);
 }
  public onSearchBtnClick(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }
}
