import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule} from '../shared/shared.module';

import { HomePageComponent } from './components/home-page';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { RecentlyViewedComponent } from './components/recently-viewed/recently-viewed.component';


@NgModule({
  declarations: [HomePageComponent, SlideshowComponent, WishListComponent, RecentlyViewedComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
