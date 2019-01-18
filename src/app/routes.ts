import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment';

const _routes: Routes = [
  { path: '', loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'home', loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'products', loadChildren: './product-list-page/product-list-page.module#ProductListPageModule' },
  { path: 'products/:id', loadChildren: './product-details-page/product-details-page.module#ProductDetailsPageModule' }
];

const notFoundRoute = { path: '**', component: PageNotFoundComponent };

const _environmentRoutes = environment.production ? [notFoundRoute] : [
  { path: 'environment', loadChildren: './environment/environment.module#EnvironmentModule' },
  notFoundRoute
];

export const routes = [
  ..._routes,
  ..._environmentRoutes
];
