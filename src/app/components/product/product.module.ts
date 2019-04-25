import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from '../product/product.component';

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        CommonModule
    ],
    bootstrap: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ]
})
export class ProductPage {}
