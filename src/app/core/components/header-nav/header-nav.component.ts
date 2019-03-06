import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopUpComponent } from 'src/app/shared/modal/pop-up/pop-up.component';


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

   public popup() {
    this.modalService.open(PopUpComponent);
 }
  public onSearchBtnClick(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }
}
