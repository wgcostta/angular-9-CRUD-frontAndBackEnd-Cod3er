import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [
  { path: 'login', component: AppLoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
