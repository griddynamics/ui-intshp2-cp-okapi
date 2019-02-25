import { Component, OnInit } from '@angular/core';
// import { ModalService } from 'src/app/shared/components/modal/modal.service';
// import { PopupWindowComponent } from 'src/app/shared/components/popup-window/popup-window.component';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  isSearchOpen = false;
  showMenu: Boolean = false;
  onSearchBtnClick() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  // constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  //  add() {
  //   this.modalService.open(PopupWindowComponent);
  //  }
}
