import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ErrorPageComponent,
  DashboardComponent,
  LoginComponent,
} from './components';
import {AuthGuard} from './utils';
import {CreateAccountComponent} from './components/account/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register/:action',
    component: CreateAccountComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
