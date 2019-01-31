import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule} from '../shared/shared.module';

import { HomePageComponent } from './components/home-page';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [HomePageComponent, SlideshowComponent, WishlistComponent],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
