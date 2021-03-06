import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar } from './components/navbar/navbar.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginPage } from './components/login/login-page.module';
import { ContactPage } from './components/contact/contact-component.module';
import { BackToTop } from './components/back-to-top/back-to-top.module';
import { ProfilePage } from './components/profile/profile.module';
import { LoginRouteGuard } from './services/login-route-guard';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';
import {ProductsPage} from './components/products/products.module';
import {ShopPage} from './components/shop/shop.module';
import {ProductPage} from './components/product/product.module';
import {Footer} from './components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Navbar,
    LoginPage,
    ContactPage,
    ProfilePage,
    ProductsPage,
    ProductPage,
    ShopPage,
    BackToTop,
    Footer
  ],
  providers: [LoginRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeHu, 'hu');
  }
}
