import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar.module';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginPage } from './components/login/login-page.module';
import { ContactPage } from './components/contact/contact-component.module';
import { BackToTop } from './components/back-to-top/back-to-top.module';
import { ProfilePage } from './components/profile/profile.module';
import { LoginRouteGuard } from './services/login-route-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ShopComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Navbar,
    LoginPage,
    ContactPage,
    ProfilePage,
    BackToTop
  ],
  providers: [LoginRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
