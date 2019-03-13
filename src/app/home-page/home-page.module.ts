import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule} from '../shared/shared.module';

import { HomePageComponent, SlideshowComponent, WishListComponent, RecentlyViewedComponent } from './components';

@NgModule({
  declarations: [HomePageComponent, SlideshowComponent, WishListComponent, RecentlyViewedComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
