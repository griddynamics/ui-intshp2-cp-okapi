import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvironmentComponent } from './environment.component';

const routes: Routes = [
  {path: '', component: EnvironmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvironmentRoutingModule { }
