import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AboutComponent} from './components/about/about.component';
import {ProductsComponent} from './components/products/products.component';
import {ContactComponent} from './components/contact/contact.component';
import {ShopComponent} from './components/shop/shop.component';
import {ServicesComponent} from './components/services/services.component';
import {LoginFormComponent} from './components/login/components/login-form/login-form.component';
import {SignupFormComponent} from './components/login/components/signup-form/signup-form.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginRouteGuard} from './services/login-route-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login-form'
      },
      {
        path: 'login-form',
        component: LoginFormComponent
      },
      {
        path: 'signup-form',
        component: SignupFormComponent
      },
    ]
  },
  {
    path: 'profile',
    canActivate: [LoginRouteGuard],
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
