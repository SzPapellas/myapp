import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductCardComponent} from './product-card.component';

@NgModule({
    declarations: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    bootstrap: [
        ProductCardComponent
    ],
    exports: [
        ProductCardComponent
    ]
})
export class ProductCard {}
