import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule
    ],
    bootstrap: [
        ProductsComponent
    ],
    exports: [
        ProductsComponent
    ]
})
export class ProductsPage {}
