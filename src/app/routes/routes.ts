import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: 'home', loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: 'products', loadChildren: './product-list-page/product-list-page.module#ProductListPageModule'},
  {path: 'products/:id', loadChildren: './product-details-page/product-details-page.module#ProductDetailsPageModule'},
  {path: '**', component: PageNotFoundComponent}
];
