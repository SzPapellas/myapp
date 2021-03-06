import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {ShoppingCart} from '../shopping-cart/shopping-cart.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ShoppingCart
    ],
    bootstrap: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class Navbar {}
