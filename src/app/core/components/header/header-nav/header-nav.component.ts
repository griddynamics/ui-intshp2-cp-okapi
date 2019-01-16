import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
