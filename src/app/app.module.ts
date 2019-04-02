import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactFooterBarComponent } from './components/contact/components/contact-footer-bar/contact-footer-bar.component';
import { LoginPage } from './components/login/login-page.module';
import {ContactPage} from './components/contact/contact-component.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ShopComponent,
    ServicesComponent,
    ContactFooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPage,
    ContactPage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
