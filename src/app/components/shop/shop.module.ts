import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ShopComponent} from './shop.component';
import {ProductCard} from './components/product-card/product-card.module';

@NgModule({
    declarations: [
        ShopComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ProductCard
    ],
    bootstrap: [
        ShopComponent
    ],
    exports: [
        ShopComponent
    ]
})
export class ShopPage {}
