import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopUpComponent } from 'src/app/shared/modal/pop-up/pop-up.component';

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
    private cartService: CartService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.cartService.getCartAmount().subscribe((cartAmount) => this.cartAmount = cartAmount);
  }

   public popup() {
    this.modalService.open(PopUpComponent);
 }
}
